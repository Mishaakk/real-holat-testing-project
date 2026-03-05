import { useState } from "react";
import type { FormEvent } from "react";
import { useRegister } from "../hooks/useRegister";
import { Button } from "@/shared/ui/shadcn/button";
import { Input } from "@/shared/ui/shadcn/input";
import { Label } from "@/shared/ui/shadcn/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/shadcn/card";
import { UserPlus, Loader2 } from "lucide-react";

export const RegisterForm = () => {
  const { mutate, isPending, error } = useRegister();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [localError, setLocalError] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirm) {
      setLocalError("Пароли не совпадают");
      return;
    }
    setLocalError("");
    mutate({ name, email, password });
  };

  return (
    <Card className="w-full max-w-sm shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <UserPlus size={20} />
          Регистрация
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <Label htmlFor="name">Имя</Label>
            <Input
              id="name"
              placeholder="Иван Иванов"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
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
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="confirm">Повторите пароль</Label>
            <Input
              id="confirm"
              type="password"
              placeholder="••••••••"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
            />
          </div>

          {(localError || error) && (
            <p className="text-sm text-destructive">
              {localError || "Ошибка регистрации. Попробуйте снова."}
            </p>
          )}

          <Button type="submit" disabled={isPending} className="w-full">
            {isPending && <Loader2 className="animate-spin mr-2" size={16} />}
            {isPending ? "Регистрация..." : "Зарегистрироваться"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
