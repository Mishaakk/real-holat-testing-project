import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { register } from "../api/authApi";
import { setAccessToken } from "@/entities/session";
import { queryKeys } from "@/shared/lib/queryKeys";

export const useRegister = () => {
  const qc = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: register,
    onSuccess: (session) => {
      setAccessToken(session.accessToken);
      qc.setQueryData(queryKeys.session, session.user);
      navigate("/dashboard");
    },
  });
};
