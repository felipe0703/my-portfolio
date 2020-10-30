import React from "react";
import { CardProject } from "../ui/CardProject";

export const HomeScreen = () => {
  return (
    <div className="h-full flex flex-col justify-center flex-1 overflow-hidden pb-20 md:pb-0 ">
      <div className="flex-1 overflow-y-auto xl:pr-5 ">
        <section className=" container  px-6 mx-auto   flex my-5 flex-col lg:flex-row">
          <div className="flex justify-center mb-5 lg:items-center lg:mb-0">
            <img
              className="rounded-full border-8 border-indigo-800 h-40 mr-3 lg:h-auto lg:mr-0 "
              src={require("../../assets/img/foto.png")}
              alt="imagen código web"
            />
          </div>
          <div className=" lg:ml-5 flex flex-col justify-between bg-gray-200 ">
            <div className="">
              <h3 className="text-white mb-1 font-semibold bg-indigo-700 inline-block p-3 rounded-r-full rounded-t-full">
                Hola, soy
              </h3>
              <h2 className="text-background4 font-bold text-5xl mb-1">
                Felipe Aguilera
              </h2>
              <h1 className="text-background5 text-2xl font-semibold">
                Front-End Developer
              </h1>
            </div>
            <div className="mt-2">
              <p className="text-background4 mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique odio omnis eos tenetur consectetur modi expedita
                quisquam odit architecto atque quaerat porro molestiae placeat,
                fugiat dolorum aspernatur quod esse accusantium?
              </p>
              <button className="bg-btn hover:bg-white text-white font-semibold hover:text-btn hover:bg-transparent border border-btn py-2 px-4 rounded-full ">
                Ver más
              </button>
            </div>
          </div>
        </section>

        <section className=" my-10 container  px-6 mx-auto  ">
          <h2 className="text-background4 font-bold text-xl mb-5 ">
            My projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
            <CardProject />
            <CardProject />
            <CardProject />
            <CardProject />
          </div>
        </section>
      </div>
    </div>
  );
};
