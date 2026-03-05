import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { login } from "../api/authApi";
import { setAccessToken } from "@/entities/session";
import { queryKeys } from "@/shared/lib/queryKeys";

export const useLogin = () => {
  const qc = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: login,
    onSuccess: (session) => {
      setAccessToken(session.accessToken);
      qc.setQueryData(queryKeys.session, session.user);
      navigate("/dashboard");
    },
  });
};
