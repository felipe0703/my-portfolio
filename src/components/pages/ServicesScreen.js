import React from "react";
import CardServices from "../ui/CardServices";

export const ServicesScreen = () => {
  return (
    <div className="h-full mx-auto flex flex-1 overflow-hidden">
      <aside className="flex-1 overflow-y-auto flex flex-col">
        <div className=" container mx-auto mb-5 pt-10 px-6">
          <h1 className="text-btn font-bold text-3xl">Servicios</h1>
          <p className="mb-5 text-background4 text-2xl font-semibold  border-b-2 border-indigo-700 pb-2 inline-block">
            Servicios que puedan necesitar
          </p>
        </div>
        <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
          <CardServices
            title="Diseño UI/UX"
            description="El diseño de interfaz de usuario o ingeniería de la interfaz es el resultado de definir la forma, función, utilidad, ergonomía, imagen de marca y otros aspectos que afectan a la apariencia externa de las interfaces de usuario en sistemas de todo tipo"
          />
          <CardServices
            title="Desarrollo Web"
            html={true}
            css3={true}
            javascript={true}
            bootstrap={true}
            tailwindcss={true}
            react={true}
          />
          <CardServices
            title="Desarrollo de aplicaciones móviles"
            javascript={true}
            react={true}
          />
          <CardServices
            title="Desarrollo de aplicaciones escritorio"
            cshart={true}
          />
        </div>
      </aside>
    </div>
  );
};
