import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Button } from "@/shared/ui/shadcn/button";        // shadcn
import { Input } from "@/shared/ui/shadcn/input";          // shadcn
import { Label } from "@/shared/ui/shadcn/label";          // shadcn
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/shadcn/card"; // shadcn
import { LogIn, Loader2 } from "lucide-react";

export const LoginForm = () => {
  const { mutate, isPending, error } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ email, password });
  };

  return (
    <Card className="w-full max-w-sm shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <LogIn size={20} />
          Вход в систему
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="password">Пароль</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>

          {error && (
            <p className="text-sm text-destructive">
              Неверный email или пароль
            </p>
          )}

          <Button type="submit" disabled={isPending} className="w-full">
            {isPending ? (
              <Loader2 className="animate-spin mr-2" size={16} />
            ) : null}
            {isPending ? "Вход..." : "Войти"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
