import { httpClient } from "@/shared/api/httpClient";
import type { User } from "../model/sessionStore";

export const fetchMe = async (): Promise<User> => {
  const { data } = await httpClient.get<User>("/auth/me");
  return data;
};
