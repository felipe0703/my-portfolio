import React from "react";
import IconCircle from "./IconCircle";

export default function CardServices({
  title,
  description,
  html,
  css3,
  javascript,
  bootstrap,
  tailwindcss,
  react,
  reactnative,
  cshart,
}) {
  return (
    // <div className="max-w-sm rounded-xl overflow-hidden shadow-lg flex flex-col justify-center items-center bg-indigo-700 pt-4">
    //   <div
    //     // className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
    //     className="h-32 w-32 bg-cover bg-center bg-no-repeat rounded-full bg-green-300"
    //     style={{
    //       backgroundImage: `url(${require("../../assets/img/pexels-pixabay-38519.jpg")})`,
    //     }}
    //   ></div>
    //   <div className="px-6 py-4 border-b">
    //     <div className="font-bold text-xl mb-2 text-white text-center">
    //       Desarrollo de aplicaciones móviles
    //     </div>
    //     <p className="text-gray-400 text-base text-center">
    //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
    //       quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
    //       nihil.
    //     </p>
    //   </div>
    //   <div className="px-6 pt-4 pb-2 flex justify-center flex-wrap">
    //     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
    //       #photography
    //     </span>
    //     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
    //       #travel
    //     </span>
    //     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
    //       #winter
    //     </span>
    //   </div>
    // </div>
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg flex flex-col justify-center items-center bg-indigo-700 pt-4 bg-gradient-to-b from-indigo-700 via-indigo-800 to-indigo-900">
      <div
        // className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        className="h-32 w-32 bg-cover bg-center bg-no-repeat rounded-full bg-green-300"
        style={{
          backgroundImage: `url(${require("../../assets/img/pexels-pixabay-38519.jpg")})`,
        }}
      ></div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white text-center">
          {title}
        </div>
        <p className="text-gray-400 text-base text-center">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-center flex-wrap">
        <IconCircle
          html={html}
          css3={css3}
          javascript={javascript}
          bootstrap={bootstrap}
          tailwindcss={tailwindcss}
          react={react}
          reactnative={reactnative}
          cshart={cshart}
        />
      </div>
    </div>
  );
}
