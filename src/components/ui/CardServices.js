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
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg flex flex-col justify-center items-center bg-indigo-700 pt-4 bg-gradient-to-b from-indigo-700 via-indigo-800 to-indigo-900">
      <div
        className="h-32 w-32 bg-cover bg-center bg-no-repeat rounded-full bg-green-300"
        style={
          {
            // backgroundImage: `url(${require("../../assets/img/pexels-pixabay-38519.jpg")})`,
          }
        }
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
