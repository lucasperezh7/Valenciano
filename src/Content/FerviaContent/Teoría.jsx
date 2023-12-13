import React, { useState } from "react";

function MultipleSections() {
  // Estado para almacenar los contenidos de los apartados
  const [sections, setSections] = useState(["", ""]);

  // Función para actualizar el contenido de un apartado
  const handleSectionChange = (index, content) => {
    const newSections = [...sections];
    newSections[index] = content;
    setSections(newSections);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Apartados para Escribir</h2>

        {/* Mapear los apartados */}
        {sections.map((sectionContent, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Apartado {index + 1}</h3>
            <textarea
              className="w-full h-32 p-2 border rounded"
              placeholder={`Escribe aquí en el apartado ${index + 1}`}
              value={sectionContent}
              onChange={(e) => handleSectionChange(index, e.target.value)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MultipleSections;
