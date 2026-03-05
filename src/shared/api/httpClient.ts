import axios from "axios";
import {
  getAccessToken,
  clearAccessToken,
  setAccessToken,
} from "@/entities/session";
import type { ApiResponse } from "./types";

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "http://localhost:3000",
  withCredentials: true, // ← браузер автоматически шлёт httpOnly cookie с refreshToken
});

// Добавляем accessToken из памяти к каждому запросу
httpClient.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Если 401 — пробуем рефреш
httpClient.interceptors.response.use(
  (res) => res,
  async (err) => {
    const original = err.config;

    if (err.response?.status === 401 && !original._retry) {
      original._retry = true;

      try {
        // Cookie с refreshToken браузер отправит сам благодаря withCredentials
        const { data } = await axios.post<ApiResponse<{ accessToken: string }>>(
          `${import.meta.env.VITE_API_URL ?? "http://localhost:3000"}/auth/refresh`,
          {},
          { withCredentials: true },
        );

        if (!data.data) throw new Error();

        // Сохраняем новый accessToken в память
        setAccessToken(data.data.accessToken);

        // Повторяем оригинальный запрос с новым токеном
        original.headers.Authorization = `Bearer ${data.data.accessToken}`;
        return httpClient(original);
      } catch {
        clearAccessToken();
        window.location.href = "/login";
        return Promise.reject(err);
      }
    }

    return Promise.reject(err);
  },
);
