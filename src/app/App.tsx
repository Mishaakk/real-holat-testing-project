import { HomePage } from "@/pages/home/HomePage";
import { BrowserRouter as Router } from "react-router";


export default function App() {
  return (
    <Router>
    <div
      className="min-h-screen"
      style={{ background: 'var(--gd-main)', backgroundAttachment: 'fixed' }}
    >
      {/* компонент нашего приложения содержаться в homepage.tsx */}
      <HomePage />
      </div>
    </Router>
  );
}
