import type React from "react"

import { Facebook, Instagram, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function Footer({ className }: React.HTMLAttributes<HTMLElement>) {
    
  return (
    <footer className={cn("bg-background", className)}>
      <div className="px-4 pb-12 md:pb-5 w-full">
      <Separator className="" />
        {/* Patrocinadores */}
        <div className="flex flex-col justify-between items-center">
        <h3 className="text-lg font-semibold py-2">Nuestros patrocinadores</h3>
          <div className="flex justify-around items-center gap-5 w-full">
            <img
              src="/images/placeholder_2.png"
              alt="placeholder logo"
              className="rounded-full h-30 w-30"
            />
            <img
              src="/images/placeholder_2.png"
              alt="placeholder logo"
              className="rounded-full h-30 w-30"

            />
            <img
              src="/images/placeholder_2.png"
              alt="placeholder logo"
              className="rounded-full h-30 w-30"
            />
            <img
              src="/images/placeholder_2.png"
              alt="placeholder logo"
              className="rounded-full h-30 w-30"
            />
            <img
              src="/images/placeholder_2.png"
              alt="placeholder logo"
              className="rounded-full h-30 w-30"
            />
            <img
              src="/images/placeholder_2.png"
              alt="placeholder logo"
              className="rounded-full h-30 w-30"
              />
            <img
              src="/images/placeholder_2.png"
              alt="placeholder logo"
              className="rounded-full h-30 w-30"
            />
          </div>
        </div>
        <Separator className="my-8" />
        {/* Info sections */}
        <div className="flex justify-around space-y-4 gap-5 text-center">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Servicios</h3>
            <div className="text-sm text-muted-foreground">
              <p>Desarrollo web full stack. <br />
                 Ingeniero químico en formación.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Enlaces</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                Inicio
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                Servicios
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                Productos
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                Acerca de
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                Contacto
              </a>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contacto</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Dirección</p>
              <p>Correo electronico</p>
              <p>numero de teléfono</p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Nuestras redes</h3>
            <div className="flex flex-col items-center md:flex-row px-2">
              <a href="https://www.aedin.com/in/jesus-alejandro-soto-molinez-0909b5345" target="blank" className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}>
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://www.aedin.com/in/jesus-alejandro-soto-molinez-0909b5345" target="blank" className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}>
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://www.aedin.com/in/jesus-alejandro-soto-molinez-0909b5345" target="blank" className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}>
                <X className="h-5 w-5" />
                <span className="sr-only">X</span>
              </a>
              
            </div>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground ">
            &copy; {new Date().getFullYear()} SAE UC. Todos los derechos reservados.
          </p>
          {/* <div className="flex gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground">
              Términos
            </a>
            <a href="#" className="hover:text-foreground">
              Privacidad
            </a>
            <a href="#" className="hover:text-foreground">
              Cookies
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  )
}
