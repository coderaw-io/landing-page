"use client"

import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
    setTheme('dark')
  }, [setTheme]);

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  }

  if (!mounted) return null;

  return (
    <Button 
      type="button"
      variant="outline" 
      size="icon" 
      className={className}
      onClick={toggleTheme} 
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Alterar tema</span>
    </Button>
  )
}

