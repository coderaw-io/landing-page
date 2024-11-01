"use client"

import { useTheme } from "next-themes"

import iconBlack from "@/app/assets/images/black-icon.png"
import iconWhite from "@/app/assets/images/white-icon.png"
import Image from "next/image"

interface IconProps {
  className?: string
}

export function Icon({ className }: IconProps) {
  const { theme } = useTheme()

  return (
    <Image
      src={theme === "dark" ? iconWhite : iconBlack}
      alt="Logo"
      width="100"
      height="100"
      className={className}
    />
  )
}