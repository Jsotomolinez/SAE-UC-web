import * as React from "react"
import { VerticalProgress } from "@/components/vertical-progress"

// Datos de ejemplo para los años y contenido
const timelineData = [
  { year: 2018, title: "Fundación", content: "Inicio de operaciones y primeros pasos." },
  { year: 2019, title: "Expansión", content: "Crecimiento del equipo y nuevos proyectos." },
  { year: 2020, title: "Pandemia", content: "Adaptación a nuevos desafíos y trabajo remoto." },
  { year: 2021, title: "Innovación", content: "Lanzamiento de nuevos productos y servicios." },
  { year: 2022, title: "Consolidación", content: "Fortalecimiento de la marca en el mercado." },
  { year: 2023, title: "Internacional", content: "Expansión a mercados internacionales." },
  { year: 2024, title: "Actualidad", content: "Situación actual y proyectos en curso." },
]

export function VerticalTimeline() {
  const [activeYearIndex, setActiveYearIndex] = React.useState(0)
  const sectionRefs = React.useRef<(HTMLDivElement | null)[]>([])

  // Calcular el progreso basado en el índice del año activo
  const progress = (activeYearIndex / (timelineData.length - 1)) * 100

  React.useEffect(() => {
    // Configurar Intersection Observer para cada sección
    const observers = timelineData.map((_, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveYearIndex(index)
            }
          })
        },
        { threshold: 0.5 }, // Activar cuando al menos el 50% de la sección sea visible
      )

      return observer
    })

    // Observar cada sección
    sectionRefs.current.forEach((section, index) => {
      if (section) {
        observers[index].observe(section)
      }
    })

    // Limpiar observers al desmontar
    return () => {
      sectionRefs.current.forEach((section, index) => {
        if (section) {
          observers[index].disconnect()
        }
      })
    }
  }, [])

  return (
    <div className="flex flex-row gap-10 min-h-[100vh] py-10">
      {/* Barra de progreso vertical fija con altura del viewport */}
      <div className="fixed left-10 top-0 h-screen flex items-center">
        <div className="relative h-[80vh] my-auto flex flex-col items-center">
          <div className="relative h-full w-4 flex items-center">
            <VerticalProgress value={progress} />

            {/* Marcadores de años */}
            {timelineData.map((item, index) => {
              const markerPosition = `${(index / (timelineData.length - 1)) * 100}%`
              return (
                <div
                  key={item.year}
                  className={`absolute flex items-center gap-2 -left-2 transition-all duration-300 ${
                    index <= activeYearIndex ? "text-primary font-bold" : "text-muted-foreground"
                  }`}
                  style={{ top: markerPosition }}
                >
                  <div
                    className={`h-3 w-3 rounded-full ${index <= activeYearIndex ? "bg-primary" : "bg-muted-foreground"}`}
                  />
                  <span className="text-sm whitespace-nowrap">{item.year}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Espacio para la barra fija */}
      <div className="w-24"></div>

      {/* Secciones de contenido */}
      <div className="flex-1 space-y-40">
        {timelineData.map((item, index) => (
          <div
            key={item.year}
            id={`year-${item.year}`}
            ref={(el) => {
              sectionRefs.current[index] = el;
            }}
            className="min-h-[50vh] flex flex-col justify-center"
          >
            <h2 className="text-2xl font-bold mb-2">
              {item.year} - {item.title}
            </h2>
            <p className="text-muted-foreground">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
