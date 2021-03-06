import React from "react";
import { Link } from "react-router-dom";
import { CardProject } from "../ui/CardProject";
import ImagePortafolioDemo from "../../assets/img/project/portafolio-demo.webp";
import ImagePokebola from "../../assets/img/project/miniatura-pokebola.webp";
import ImageCarrito from "../../assets/img/project/carrito-de-compras.webp";

export const HomeScreen = () => {
  return (
    <div className="h-full flex flex-col justify-center align-  flex-1 overflow-hidden pb-20 md:pb-0 ">
      <div className="flex-1 overflow-y-auto xl:pr-5">
        <section className=" container  px-6 mx-auto flex my-5 flex-col lg:flex-row">
          <picture className="flex justify-center mb-5 lg:items-center lg:mb-0">
            <img
              className="h-56 mr-3 lg:h-auto lg:max-w-xs xl:max-w-sm lg:mr-0 "
              src={require("../../assets/img/undraw_web_developer_p3e5.svg")}
              alt="imagen web developer"
            />
          </picture>
          <div className=" lg:ml-8 flex flex-col justify-between bg-gray-200 ">
            <div className="">
              <h3 className="text-white mb-1 font-semibold bg-indigo-700 inline-block p-3 rounded-r-full rounded-t-full">
                ¡Hola! soy
              </h3>
              <h2 className="text-background4 font-bold text-5xl mb-1">
                Felipe Aguilera
              </h2>
              <h1 className="text-background5 text-xl font-semibold">
                Desarrollador de Aplicaciones Multiplataforma
              </h1>
            </div>
            <div className="mt-2">
              <p className="text-background4 mb-6">
                Soy desarrollador de aplicaciones Web y Móvil a medida con más
                de 4 años de experiencia
              </p>
              <button className=" bg-btn hover:bg-gray-200 text-white font-semibold hover:text-btn hover:bg-transparent border border-btn py-2 px-4 rounded-full ">
                <Link to="/about">Ver más</Link>
                {/* Ver más */}
              </button>
            </div>
          </div>
        </section>

        <section className=" my-10 container  px-6 mx-auto  ">
          <h2 className="text-background4 font-bold text-xl mb-5 ">
            Mis proyectos
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6 ">
            <CardProject
              image={ImagePortafolioDemo}
              title="Portafolio Demo"
              description="Portafolio básico creado con HTML y CSS"
              repo="https://github.com/felipeaguileradev/portafolio-demo"
              url="https://felipeaguileradev.github.io/portafolio-demo/"
              html={true}
              css={true}
            />
            <CardProject
              image={ImagePokebola}
              title="Dibujando con CSS - Pokebola"
              description="Un tutorial de como dibujar una pokebola con HTML y CSS, usando pseudo-clases como after y before, además de animaciones"
              repo="https://github.com/felipeaguileradev/tutorial-pokebola"
              url="https://www.youtube.com/watch?v=WV_7LZc-FCY"
              img_fill={false}
              html={true}
              css={true}
            />
            <CardProject
              image={ImageCarrito}
              title="Carrito de compras con Javascript"
              description="Página de carrito de compras, hecha en HTML, CSS y JAVASCRIP"
              repo="https://github.com/felipeaguileradev/carrito-de-compras"
              url="https://felipeaguileradev.github.io/carrito-de-compras/"
              img_fill={false}
              html={true}
              css={true}
              javascript={true}
            />
          </div>
        </section>
      </div>
    </div>
  );
};
