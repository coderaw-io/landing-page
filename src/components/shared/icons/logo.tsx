"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

import logoBlack from "@/app/assets/images/black-logo.png"
import logoWhite from "@/app/assets/images/white-logo.png"
import Image from "next/image"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? resolvedTheme : theme;

  return (
    <Image
      src={currentTheme === "light" ? logoBlack : logoWhite}
      alt="Logo"
      width={600}
      height={300}
      className={className}
    />
  )
}

