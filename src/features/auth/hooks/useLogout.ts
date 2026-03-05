import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { logout } from "../api/authApi";
import  { clearSession } from "@/shared/store/authStore";

export const useLogout = () => {
  const qc = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: logout,
    onSettled: () => {
      clearSession();
      qc.clear();
      navigate("/login");
    },
  });
};
