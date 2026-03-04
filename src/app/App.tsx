import { HomePage } from '@/pages/home/ui/HomePage'


// наш App.tsx является точкой входа нашего приложения
export default function App() {
  return (
    <div
      className="min-h-screen"
      style={{ background: 'var(--gd-main)', backgroundAttachment: 'fixed' }}
    >
      {/* компонент нашего приложения содержаться в homepage.tsx */}
      <HomePage />
    </div>
  )
}
