// src/hooks/useLogout.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { logout } from "../api/authApi";
import { useAuthStore } from "@/shared/store/authStore";

export const useLogout = () => {
  const qc = useQueryClient();
  const navigate = useNavigate();
  const clearSession = useAuthStore((state) => state.clearSession);

  return useMutation({
    mutationFn: logout,
    onSettled: () => {
      clearSession();
      qc.clear();
      navigate("/login");
    },
  });
};
