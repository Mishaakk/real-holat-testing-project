import { createBrowserRouter, Navigate } from "react-router";
import App from "../App";
import { LoginPage } from "@/pages/login/ui/LoginPage";
import { RegisterPage } from "@/pages/register/ui/RegisterPage";
import { DashboardPage } from "@/pages/dashboard/ui/DashboardPage";
import { HomePage } from "@/pages/home/HomePage";
import { ProtectedRoute } from "./ProtectedRoute";

export const router = createBrowserRouter([
  // Публичные роуты
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },

  // Защищённые роуты
  {
    element: <ProtectedRoute />,
    children: [{ path: "/dashboard", element: <DashboardPage /> }],
  },

  // Всё остальное → логин
  { path: "*", element: <Navigate to="/login" replace /> },
]);
