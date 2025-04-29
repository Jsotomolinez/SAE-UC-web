export function TeamCard({
  imageSrc = "/images/placeholder.jpg",
  name = "Nombre no especificado",
  position = "Posición no especificada",
}: {
  imageSrc?: string;
  name?: string;
  position?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-700 rounded-lg p-4 shadow-black shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="m-2 rounded-md overflow-hidden">
        <img src={imageSrc} alt={name} />
      </div>
      <div className="text-center mt-2">
        <h3 className="text-lg font-semibold">{name}</h3>
        <span className="text-sm">{position}</span>
      </div>
    </div>
  );
}

