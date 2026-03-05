import { httpClient } from "@/shared/api/httpClient";
import type { Session } from "@/entities/session";

export interface LoginDto {
  email: string;
  password: string;
}

export const login = async (dto: LoginDto): Promise<Session> => {
  const { data } = await httpClient.post<Session>("/auth/login", dto);
  return data;
};

export const logout = async (): Promise<void> => {
  await httpClient.post("/auth/logout");
};

export interface RegisterDto {
  name: string;
  email: string;
  password: string;
}

export const register = async (dto: RegisterDto): Promise<Session> => {
  const { data } = await httpClient.post<Session>("/auth/register", dto);
  return data;
};