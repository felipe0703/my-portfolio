import React from "react";

export const ContactScreen = () => {
  return (
    <div className="h-full mx-auto flex flex-1 overflow-hidden">
      <aside className="flex-1 overflow-y-auto flex flex-col">
        {/* title */}
        {/* <div className=" container mx-auto mb-5 pt-10 px-6  bg-gradient-to-r from-indigo-900 to-indigo-700"> */}
        <div className=" container mx-auto mb-5 pt-10 px-6">
          <h1 className="text-btn font-bold text-3xl">Contacto</h1>
          <p className="mb-5 text-background4 text-2xl font-semibold  border-b-2 border-indigo-700 pb-2 inline-block">
            Contrátame
          </p>
        </div>
        <div className="flex justify-center items-center h-full">
          <p className="text-background4 font-semibold text-2xl inline-block text-center">
            Esta sección esta en producción, <br /> mientras tanto me puedes
            contactar a mi correo: <br />
            <span className="text-background4 font-bold text-2xl inline-block">
              felipe.aguilera.dev@gmail.com
            </span>
          </p>
        </div>
      </aside>
    </div>
  );
};
