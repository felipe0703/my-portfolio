import React, { memo } from "react";
import { GitHub, Visibility } from "@material-ui/icons";

export const CardProject2 = memo(({ project }) => {
  const { title, category, description, image, url } = project;

  return (
    <div className="max-w-sm rounded-tr-none rounded-tl-3xl rounded-bl-none rounded-br-3xl overflow-hidden shadow-lg flex flex-col justify-center items-center bg-indigo-800 ">
      <div
        // className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        className="h-48 w-full bg-cover bg-no-repeat rounded-br-3xl bg-green-300 "
        // style={{
        //   backgroundImage: `url(${require("../../assets/img/pexels-pixabay-38519.jpg")})`,
        // }}
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div className="px-6 py-4">
        <div className="font-bold text-lg mb-2 text-white">{title}</div>
        <p className="text-sm text-gray-500">{category}</p>
        <p className="text-gray-400 text-base text-center">{description}</p>
      </div>
      <div className="mb-5">
        <button className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded mr-5">
          <Visibility />
        </button>
        <button className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded">
          <a href={url}>
            <GitHub />
          </a>
        </button>
      </div>
    </div>
  );
});
