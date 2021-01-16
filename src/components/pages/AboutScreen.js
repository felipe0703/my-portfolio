import React from "react";
import {
  SentimentVerySatisfiedOutlined,
  LocalCafeOutlined,
  WhatshotOutlined,
} from "@material-ui/icons";

export const AboutScreen = () => {
  return (
    <div className="h-full flex flex-1 overflow-hidden ">
      <aside className="flex-1 overflow-y-auto flex flex-col">
        <div className="container mx-auto px-6 mb-5 sm:mt-10">
          <p className="text-btn font-bold text-3xl">Sobre mí</p>
          <p className="text-background4 font-semibold text-2xl border-b-2 border-indigo-700 pb-2 inline-block">
            Aprende más sobre mí
          </p>
        </div>

        <div className="container mx-auto px-6 flex flex-col xl:flex-row xl:items-center ">
          <picture className="my-5 xl:mb-0">
            <img
              className="max-w-sm mx-auto"
              src={require("../../assets/img/undraw_developer_activity_bv83.svg")}
              alt="imagen código web"
            />
          </picture>

          <div className="bg-white rounded-tl-3xl rounded-br-3xl xl:ml-5 p-4 shadow-md">
            <h1 className="font-bold text-2xl text-background4 mb-3">
              Desarrollador Multiplataforma
            </h1>
            <p className="text-background5 mb-5">
              Apasionado por el desarrollo Web tanto en el front-end como
              back-end, más enfocado en el front-end. El desarrollo móvil es
              otra área que me motiva a diario a seguir en esta industria.
              También he desarrollado aplicaciones para escritorio e
              incursionado en el desarrollo de videojuegos.
              <br />
              <br />
              Soy una persona autodidacta, bien organizada, solucionadora de
              problemas, empleado independiente con gran atención al detalle, a
              diario dedico tiempo para aprender nueva habilidades que me ayuden
              a mejorar como profesional.
            </p>
            {/* <div className="flex ">
              <button className="bg-btn hover:bg-white text-white font-semibold hover:text-btn hover:bg-transparent border border-btn py-2 px-4 rounded-full mr-5">
                Descargar CV
              </button>
              <button className="bg-btn hover:bg-white text-white font-semibold hover:text-btn hover:bg-transparent border border-btn py-2 px-4 rounded-full ">
                Contacto
              </button>
            </div> */}

            <div className="flex flex-col lg:flex-row lg:justify-center  mt-5">
              <div className="flex items-center mr-10 mb-3 lg:mb-0">
                <div className="-mt-2">
                  <WhatshotOutlined
                    style={{
                      color: "#a0aec0",
                      fontSize: 50,
                    }}
                  />
                </div>
                <div className="ml-3">
                  <p className="font-bold text-3xl -mb-1 text-background4">
                    82
                  </p>
                  <p className="text-lg text-background5">
                    Proyectos completados
                  </p>
                </div>
              </div>
              <div className="flex items-center mr-10 mb-3 lg:mb-0">
                <div className="-mt-2">
                  <SentimentVerySatisfiedOutlined
                    style={{
                      color: "#a0aec0",
                      fontSize: 50,
                    }}
                  />
                </div>
                <div className="ml-3">
                  <p className="font-bold text-3xl -mb-1 text-background4">
                    112
                  </p>
                  <p className="text-lg text-background5">
                    Clientes satisfechos
                  </p>
                </div>
              </div>
              <div className="flex items-center mr-10">
                <div className="-mt-2">
                  <LocalCafeOutlined
                    style={{
                      color: "#a0aec0",
                      fontSize: 50,
                    }}
                  />
                </div>
                <div className="ml-3">
                  <p className="font-bold text-3xl -mb-1 text-background4">
                    5310
                  </p>
                  <p className="text-lg text-background5">Tazas de café</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-8 mx-auto px-6 flex flex-col xl:flex-row xl:items-center ">
          <div className="container mx-auto sm:mt-10 xl:mr-5">
            <h2 className="text-white font-semibold text-xl mb-5 bg-indigo-700 rounded-r-full rounded-t-full inline-block p-3">
              Intereses
            </h2>
            <p className="text-background5 bg-white rounded-tl-3xl rounded-br-3xl p-5 shadow-lg">
              Soy una persona muy activa, toda mi vida me he dedicado al deporte
              y al baile. Durante mi tiempo libre me gusta estar en familia o
              viendo series. Además, soy padre de una hermosa hija.
              <br />
              <br />
              Interesado en todo lo relacionado con el desarrollo web y móvil,
              me gusta trabajar en proyectos ambiciosos con gente positiva
            </p>
          </div>
          <picture className="mb-5 xl:mb-0 order-first xl:order-last">
            <img
              className="max-w-sm mx-auto"
              src={require("../../assets/img/undraw_static_website_0107.svg")}
              alt="imagen código web"
            />
          </picture>
        </div>

        <div className="container mx-auto p-6 sm:mt-10 mb-20 mt-5">
          <h2 className="text-white font-semibold text-xl mb-5 bg-indigo-700 rounded-r-full rounded-t-full inline-block p-3">
            Tecnologías
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8  gap-2">
            <div className="flex flex-col items-center ">
              <img
                className="h-12"
                src={require("../../assets/icons/HTML.png")}
                alt="wordpress"
              />
              <p className="font-semibold text-background5 my-2">HTML5</p>
            </div>
            <div className="flex flex-col items-center ">
              <img
                className="h-12"
                src={require("../../assets/icons/CSS3.png")}
                alt="wordpress"
              />
              <p className="font-semibold text-background5 my-2">CSS3</p>
            </div>
            <div className="flex flex-col items-center ">
              <img
                className="h-12"
                src={require("../../assets/icons/javascript.png")}
                alt="wordpress"
              />
              <p className="font-semibold text-background5 my-2">Javascript</p>
            </div>
            <div className="flex flex-col items-center ">
              <img
                className="h-12"
                src={require("../../assets/icons/bootstrap.png")}
                alt="wordpress"
              />
              <p className="font-semibold text-background5 my-2">Bootstrap</p>
            </div>
            <div className="flex flex-col items-center ">
              <img
                className="h-12"
                src={require("../../assets/icons/tailwind.png")}
                alt="wordpress"
              />
              <p className="font-semibold text-background5 my-2">TailwindCSS</p>
            </div>
            <div className="flex flex-col items-center ">
              <img
                className="h-12"
                src={require("../../assets/icons/wordpress.png")}
                alt="wordpress"
              />
              <p className="font-semibold text-background5 my-2">Wordpress</p>
            </div>
            <div className="flex flex-col items-center ">
              <img
                className="h-12"
                src={require("../../assets/icons/php.png")}
                alt="wordpress"
              />
              <p className="font-semibold text-background5 my-2">PHP</p>
            </div>
            <div className="flex flex-col items-center ">
              <img
                className="h-12"
                src={require("../../assets/icons/react.png")}
                alt="wordpress"
              />
              <p className="font-semibold text-background5 my-2">Reactjs</p>
            </div>
            <div className="flex flex-col items-center ">
              <img
                className="h-12"
                src={require("../../assets/icons/react.png")}
                alt="wordpress"
              />
              <p className="font-semibold text-background5 my-2">
                React-Native
              </p>
            </div>
            <div className="flex flex-col items-center ">
              <img
                className="h-12"
                src={require("../../assets/icons/github.png")}
                alt="wordpress"
              />
              <p className="font-semibold text-background5 my-2">Github</p>
            </div>
            <div className="flex flex-col items-center ">
              <img
                className="h-12"
                src={require("../../assets/icons/csharp.png")}
                alt="wordpress"
              />
              <p className="font-semibold text-background5 my-2">C#</p>
            </div>
            <div className="flex flex-col items-center ">
              <img
                className="h-12"
                src={require("../../assets/icons/photoshop.png")}
                alt="wordpress"
              />
              <p className="font-semibold text-background5 my-2">Photoshop</p>
            </div>
            <div className="flex flex-col items-center ">
              <img
                className="h-12"
                src={require("../../assets/icons/illustrator.png")}
                alt="wordpress"
              />
              <p className="font-semibold text-background5 my-2">
                AIllustrator
              </p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};
