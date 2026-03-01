import { cn } from '@/shared/lib/cn'
import { useState, useRef, useEffect } from 'react'
import { menuItems, UserMenuProps } from '../model/UserMenu.data'
import { ChevronIcon } from '@/shared/ui/ChevronIcon'


export function UserMenu({ className }: UserMenuProps) {
  // создаем хуки для открытия и закрытия меню
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // обработчик клика за пределами меню
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className={cn('relative', className)} ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          'flex items-center gap-2 bg-white rounded-full px-4 py-2.5 text-sm font-semibold text-[#111]',
          'shadow-[0_1px_8px_rgba(0,0,0,0.10)] hover:shadow-[0_2px_16px_rgba(0,0,0,0.15)]',
          'transition-all duration-200 cursor-pointer border-none',
          'active:scale-[0.98]'
        )}
      >
        <span className="w-5 h-5 rounded-full bg-gradient-to-br from-[#00FF7F] to-[#3B82F6] flex items-center justify-center text-white text-[10px] font-bold">
          F
        </span>
        Fuqaro
        <span className={cn('transition-transform duration-200', open && 'rotate-180')}>
          <ChevronIcon />
        </span>
      </button>

      {open && (
        <div className={cn(
          'absolute right-0 top-full mt-2 w-48 bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.15)]',
          'border border-black/5 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200'
        )}>
          {menuItems.map((item, index) => (
            <button
              key={item.label}
              className={cn(
                'w-full flex items-center gap-3 px-4 py-3 text-sm text-[#444] hover:bg-[#f9f9f9]',
                'transition-colors cursor-pointer border-none bg-transparent text-left',
                index !== menuItems.length - 1 && 'border-b border-black/5'
              )}
            >
              <span className="text-base">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
