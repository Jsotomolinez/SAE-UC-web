import type React from "react"
import { cn } from "@/lib/utils"

interface MainNavProps extends React.HTMLAttributes<HTMLElement> {}

export function MainNav({ className, ...props }: MainNavProps) {
  const routes = [
    {
      href: "/",
      label: "Inicio",
    },
    {
      href: "/proyectos",
      label: "Proyectos",
    },
    {
      href: "/equipo",
      label: "Equipo",
    },
    {
      href: "/historia",
      label: "Historia",
    },
    {
      href: "/servicios",
      label: "Servicios",
    },
    {
      href: "/contacto",
      label: "Contacto",
    },
  ]

  return (
    <nav className={cn("flex items-center space-x-6", className)} {...props}>
      {routes.map((route) => (
        <a key={route.href} href={route.href} className="text-sm font-medium transition-colors hover:text-primary">
          {route.label}
        </a>
      ))}
    </nav>
  )
}
