import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../styles/index.css";
import "../styles/main.css";
import { RouterProvider } from "react-router";
import { router } from "../routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "leaflet/dist/leaflet.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
