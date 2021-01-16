import React from "react";
import { CardProject2 } from "../ui/CardProject2";

export const ProjectsScreen = () => {
  return (
    <div className="h-full mx-auto flex flex-1 overflow-hidden">
      <aside className="flex-1 overflow-y-auto flex flex-col">
        {/* title */}
        {/* <div className=" container mx-auto mb-5 pt-10 px-6  bg-gradient-to-r from-indigo-900 to-indigo-700"> */}
        <div className=" container mx-auto mb-5 pt-10 px-6">
          <h1 className="text-btn font-bold text-3xl">Proyectos</h1>
          <p className="mb-5 text-background4 text-2xl font-semibold  border-b-2 border-indigo-700 pb-2 inline-block">
            Mira todos mis proyectos
          </p>
        </div>
        {/* servicios */}
        {/* 
        <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 gap-5 mb-20">
          {projects.map((project) => (
            <CardProject2 key={project.id} project={project} />
          ))} 
         
        </div>
          */}
        {/* fin secction  */}

        <div className="flex justify-center items-center h-full">
          <h2 className="text-background4 font-semibold text-2xl">
            En producción
          </h2>
        </div>
      </aside>
    </div>
  );
};
