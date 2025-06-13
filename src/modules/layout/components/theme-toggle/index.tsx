"use client"

import { Sun, Moon } from "lucide-react"
import { useTheme } from "@lib/hooks/use-theme"

const ThemeToggle = () => {
  const { theme, toggle } = useTheme()

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="flex items-center justify-center w-8 h-8 text-[#482A12] hover:text-[#D49D5D] dark:text-empire-midnight dark:hover:text-empire-gold transition-colors duration-300 focus:outline-none"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}

export default ThemeToggle
