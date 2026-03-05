import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { setAccessToken } from "../model/sessionStore";
import { queryKeys } from "@/shared/lib/queryKeys";
import { httpClient } from "@/shared/api/httpClient";
import type { ApiResponse } from "@/shared/api/types";
import type { User } from "../model/sessionStore";

export const useInitSession = () => {
  const [isReady, setIsReady] = useState(false);
  const qc = useQueryClient();

  useEffect(() => {
    const init = async () => {
      try {
        const { data } =
          await httpClient.post<
            ApiResponse<{ accessToken: string; user: User }>
          >("/auth/refresh");

        if (data.data) {
          setAccessToken(data.data.accessToken);
          qc.setQueryData(queryKeys.session, data.data.user);
        }
      } catch {
        // Не авторизован — просто ничего не делаем
      } finally {
        setIsReady(true);
      }
    };

    init();
  }, []);

  return isReady;
};
