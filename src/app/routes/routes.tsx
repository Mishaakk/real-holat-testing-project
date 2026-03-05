// import { createBrowserRouter, Navigate } from "react-router";
// import App from "../App";
// import {LoginPage } from "@/pages/login/ui/LoginPage";
// import { ProtectedRoute } from "./ProtectedRoute";
// import { DashboardPage } from "@/pages/dashboard/ui/DashboardPage";
// import { RegisterPage } from "@/pages/register/ui/RegisterPage";

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       // <ProtectedRoute>
//       <App />
//       // </ProtectedRoute>
//     ),
//   },
//   {
//     path: "/login",
//     element: <LoginPage />,
//   },
//   { path: "/register", element: <RegisterPage /> },
//   {
//     element: <ProtectedRoute />,
//     children: [{ path: "/dashboard", element: <DashboardPage /> }],
//   },
//   { path: "*", element: <Navigate to="/login" replace /> },
// ]);

// // добавили роутинг приложения