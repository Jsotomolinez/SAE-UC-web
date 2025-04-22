// Eliminar "use client"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"

export function ModeToggle() {
  // Estado para almacenar el tema actual
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system")
  // Estado para controlar si el componente está montado (importante para SSR en Astro)
  const [mounted, setMounted] = useState(false)

  // Efecto para marcar el componente como montado
  useEffect(() => {
    setMounted(true)
  }, [])

  // Efecto para inicializar el tema desde localStorage o preferencias del sistema
  useEffect(() => {
    if (!mounted) return

    const storedTheme = localStorage.getItem("theme") as "light" | "dark" | "system" | null

    if (storedTheme) {
      setTheme(storedTheme)
    } else {
      // Detectar preferencia del sistema
      const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      setTheme(systemPreference)
    }
  }, [mounted])

  // Efecto para aplicar el tema cuando cambia
  useEffect(() => {
    if (!mounted) return

    const root = document.documentElement

    if (theme === "dark") {
      root.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else if (theme === "light") {
      root.classList.remove("dark")
      localStorage.setItem("theme", "light")
    } else {
      // Tema del sistema
      const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches
      if (systemPreference) {
        root.classList.add("dark")
      } else {
        root.classList.remove("dark")
      }
      localStorage.setItem("theme", "system")
    }
  }, [theme, mounted])

  // No renderizar nada durante SSR para evitar problemas de hidratación
//   if (!mounted) {
//     return <Button variant="ghost" size="icon" className="opacity-0 h-9 w-9" />
//   }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Cambiar tema</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>Claro</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>Oscuro</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>Sistema</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
