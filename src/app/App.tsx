import { HomePage } from '@/pages/home/ui/HomePage'


// наш App.tsx является точкой входа нашего приложения
export default function App() {
  return (
    <div
      className="min-h-screen"
      style={{ background: 'linear-gradient(135deg, #B8F5D8 0%, #D4C5F9 60%, #C7F2E8 100%)', backgroundAttachment: 'fixed' }}
    >
      {/* компонент нашего приложения содержаться в homepage.tsx */}
      <HomePage />
    </div>
  )
}
