import { LoginForm } from "@/features/auth";
import { Link } from "react-router";

export const LoginPage = () => (
  <main className="min-h-screen flex flex-col items-center justify-center gap-4 bg-muted/40">
    <LoginForm />
    <p className="text-sm text-muted-foreground">
      Нет аккаунта?{" "}
      <Link to="/register" className="underline hover:text-foreground">
        Зарегистрироваться
      </Link>
    </p>
  </main>
);
