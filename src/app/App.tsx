import { HomePage } from "@/pages/home/HomePage";
import { BrowserRouter as Router } from "react-router";


export default function App() {
  return (
    <Router>
      <div
        className="min-h-screen"
        style={{
          background:
            "linear-gradient(135deg, #B8F5D8 0%, #D4C5F9 60%, #C7F2E8 100%)",
          backgroundAttachment: "fixed",
        }}
      >
      <HomePage />
      </div>
    </Router>
  );
}
