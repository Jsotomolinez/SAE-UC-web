export function ProyectCard(
  {
    imageSrc = '/images/placeholder.jpg',
    name = 'Sin nombre',
    year = 'Sin determinar',
    description = 'Sin determinar'
  }:
  {
    imageSrc?: string,
    name?: string,
    year?: string,
    description?: string
  }
) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
      <div className="m-2 rounded-md overflow-hidden">
        <img src={imageSrc} alt={name} className="h-50 w-auto"/>
      </div>
      <div className="text-center mt-2">
        <h3 className="text-lg font-semibold">{name}</h3>
        <span className="text-sm">{year}</span>
        <span className="text-sm">{description}</span>
      </div>
    </div>
  )
};