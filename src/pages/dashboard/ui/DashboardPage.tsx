import { useSession } from "@/entities/session";
// useLogout живёт в features, но экспортим через entities — нет, правильнее импортировать из features:
import { useLogout } from "@/features/auth";
import { Button } from "@/shared/ui/Button";
import { LogOut } from "lucide-react";

export const DashboardPage = () => {
  // const { data: user } = useSession();
  const { mutate: logout, isPending } = useLogout();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4">
      {/* <div className="flex items-center gap-2 text-lg font-semibold">
        <User size={20} />
        Привет, {user?.name ?? user?.email}!
      </div> */}
      <Button variant="dark" onClick={() => logout()} disabled={isPending}>
        <LogOut size={16} className="mr-2" />
        Выйти
      </Button>
    </main>
  );
};
