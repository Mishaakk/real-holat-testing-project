import { RegisterForm } from "@/features/auth/ui/RegisterForm";
import { Link } from "react-router";

export const RegisterPage = () => (
  <main className="min-h-screen flex flex-col items-center justify-center gap-4 bg-muted/40">
    <RegisterForm />
    <p className="text-sm text-muted-foreground">
      Уже есть аккаунт?
      <Link to="/login" className="underline hover:text-foreground">
        Войти
      </Link>
    </p>
  </main>
);
