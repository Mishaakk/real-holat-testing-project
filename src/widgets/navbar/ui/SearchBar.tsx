import { cn } from '@/shared/lib/cn'
import { SearchIcon } from '@/shared/ui/SearchIcon'
import { useState, useRef, useEffect } from 'react'
import { SearchBarProps } from '../model/SearchBar.types'



export function SearchBar({ className }: SearchBarProps) {
  const [focused, setFocused] = useState(false)
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div
      className={cn(
        'ml-auto flex items-center gap-2 bg-white rounded-full px-4 py-2.5',
        'transition-all duration-200 cursor-text',
        focused
          ? 'shadow-[0_0_0_2px_#00FF7F] w-56'
          : 'shadow-[0_1px_8px_rgba(0,0,0,0.10)] w-44',
        className
      )}
      onClick={() => inputRef.current?.focus()}
    >
      <SearchIcon />
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Qidirish..."
        className="bg-transparent outline-none text-sm text-[#444] placeholder-[#aaa] w-full font-[inherit]"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      {!value && (
        <kbd className="hidden sm:flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] text-[#999] bg-[#f5f5f5] rounded border border-[#ddd]">
          ⌘K
        </kbd>
      )}
    </div>
  )
}
