import { Outlet } from "react-router";

export default function App() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "var(--gd-main)", backgroundAttachment: "fixed" }}
    >
      {/* компонент нашего приложения содержаться в homepage.tsx */}
      <Outlet />
    </div>
  );
}
