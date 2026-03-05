import { RouterProvider as RRDProvider } from "react-router";
import { router } from "../routes/routes";

export const RouterProvider = () => <RRDProvider router={router} />;
