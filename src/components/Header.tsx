import { ModeToggle } from "@/components/ModeToggle"
import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background opacity-75 h-16 px-5">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo a la izquierda */}
        <div className="flex items-center">
          <a href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-foreground/10 rounded-md flex items-center justify-center">
              <img
                src="/images/placeholder_2.png"
                alt="SAE UC"
              />
              <span className="sr-only">Logo</span>
            </div>
            <span className="font-bold">Mi Sitio</span>
          </a>
        </div>

        {/* Navegación en el centro - visible en desktop */}
        <div className="hidden md:flex md:justify-center md:flex-1">
          <MainNav />
        </div>

        {/* Botones a la derecha */}
        <div className="flex items-center gap-2">
          <ModeToggle />

          {/* Menú móvil */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="py-4">
                <MainNav className="flex flex-col space-y-4" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
