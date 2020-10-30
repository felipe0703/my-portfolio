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
        {/* title */}
        <div className="container mx-auto px-6 mb-5 sm:mt-10">
          <p className="text-btn font-bold text-3xl">Sobre mí</p>
          <p className="text-background4 font-semibold text-2xl border-b-2 border-indigo-700 pb-2 inline-block">
            Aprende más sobre mí
          </p>
        </div>
        {/* imagenes y resumen */}
        <div className="container mx-auto px-6 flex flex-col xl:flex-row xl:items-center ">
          {/* imágenes */}
          <div className="grid grid-cols-2 gap-2 mb-5 xl:mb-0">
            <img
              className="rounded-xl mt-5 shadow-lg"
              src={require("../../assets/img/code-820275_1920.jpg")}
              alt="imagen código web"
            />
            <img
              className="rounded-xl shadow-lg"
              src={require("../../assets/img/work-731198_1920.jpg")}
              alt="imagen código web"
            />
            <img
              className="rounded-xl shadow-lg"
              src={require("../../assets/img/pexels-pixabay-270404.jpg")}
              alt="imagen código web"
            />
            <img
              className="rounded-xl -mt-5 shadow-lg"
              src={require("../../assets/img/pexels-alif-sagor-3721646.jpg")}
              alt="imagen código web"
            />
          </div>

          {/* resumen */}
          <div className="bg-white rounded-tl-3xl rounded-br-3xl xl:ml-5 p-4 shadow-md">
            <h1 className="font-bold text-2xl text-background4 mb-3">
              Fullstack Developer
            </h1>
            <p className="text-background5 mb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
              necessitatibus dolorem nam commodi voluptatum aperiam debitis
              maxime. Excepturi cum saepe consequatur voluptatibus, neque,
              accusantium a quam deleniti quae architecto eum.
            </p>
            <div className="flex ">
              <button className="bg-btn hover:bg-white text-white font-semibold hover:text-btn hover:bg-transparent border border-btn py-2 px-4 rounded-full mr-5">
                Descargar CV
              </button>
              <button className="bg-btn hover:bg-white text-white font-semibold hover:text-btn hover:bg-transparent border border-btn py-2 px-4 rounded-full ">
                Contacto
              </button>
            </div>
            {/* iconos numeros */}
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

        {/* Intereses */}
        <div className="container mx-auto p-6 sm:mt-10">
          <h2 className="text-white font-semibold text-xl mb-5 bg-indigo-700 rounded-r-full rounded-t-full inline-block p-3">
            Intereses
          </h2>
          <p className="text-background5 bg-white rounded-tl-3xl rounded-br-3xl p-5 shadow-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            accusantium delectus fugit cupiditate impedit, ipsum numquam,
            tempora modi illum rerum tenetur deleniti vel aut? Voluptatibus
            numquam esse facere porro maiores.
          </p>
        </div>

        {/* tecnologías */}
        <div className="container mx-auto p-6 sm:mt-10 mb-20">
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
        {/* testimonios */}
        {/* <div className="mt-10 mb-20">
          <h3 className="text-white font-semibold text-2xl mb-5  bg-indigo-700 rounded-r-full rounded-t-full inline-block p-3">
            Testimonios
          </h3>

          <div className="grid grid-cols-3 gap-4">
            <div className="rounded-lg bg-white shadow-lg p-3 ">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis,
                culpa, aliquid animi magni laboriosam modi nam cumque ab
                temporibus deserunt eos minus nobis perferendis ea voluptates
                incidunt voluptas tenetur doloribus?
              </p>
              <div className="-mb-12 flex mt-5 content-start">
                <img
                  className="rounded-full border-8 border-indigo-800 h-24"
                  src={require("../../assets/img/foto.png")}
                  alt="imagen código web"
                />
                <div className="ml-5 flex flex-col">
                  <p className="font-bold text-background4 text-lg">
                    Marco Toloza
                  </p>
                  <p className="text-background5">CEO empresa</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-white shadow-lg p-3 ">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis,
                culpa, aliquid animi magni laboriosam modi nam cumque ab
                temporibus deserunt eos minus nobis perferendis ea voluptates
                incidunt voluptas tenetur doloribus?
              </p>
              <div className="-mb-12 flex mt-5 content-start">
                <img
                  className="rounded-full border-8 border-indigo-800 h-24"
                  src={require("../../assets/img/foto.png")}
                  alt="imagen código web"
                />
                <div className="ml-5 flex flex-col">
                  <p className="font-bold text-background4 text-lg">
                    Marco Toloza
                  </p>
                  <p className="text-background5">CEO empresa</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-white shadow-lg p-3 ">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis,
                culpa, aliquid animi magni laboriosam modi nam cumque ab
                temporibus deserunt eos minus nobis perferendis ea voluptates
                incidunt voluptas tenetur doloribus?
              </p>
              <div className="-mb-12 flex mt-5 content-start">
                <img
                  className="rounded-full border-8 border-indigo-800 h-24"
                  src={require("../../assets/img/foto.png")}
                  alt="imagen código web"
                />
                <div className="ml-5 flex flex-col">
                  <p className="font-bold text-background4 text-lg">
                    Marco Toloza
                  </p>
                  <p className="text-background5">CEO empresa</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </aside>
    </div>
  );
};
