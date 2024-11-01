"use client"

import { useTheme } from "next-themes"

import logoBlack from "@/app/assets/images/black-logo.png"
import logoWhite from "@/app/assets/images/white-logo.png"
import Image from "next/image"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  const { theme } = useTheme()

  return (
    <Image
      src={theme === "dark" ? logoWhite : logoBlack}
      alt="Logo"
      width="600"
      height="300"
      className={className}
    />
  )
}