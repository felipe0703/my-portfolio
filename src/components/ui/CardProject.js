import React from "react";
import { GitHub, Visibility } from "@material-ui/icons";

export const CardProject = ({ image, title, description, url, repo }) => {
  return (
    <div className="max-w-sm rounded-md overflow-hidden shadow-lg bg-background ">
      <div className="relative">
        <picture className="hover:visible">
          <img
            className="h-64 w-full object-cover object-top"
            src={image}
            alt="Imágen del proyecto"
          />
        </picture>
        <div
          className="flex justify-evenly items-center
          opacity-0 hover:opacity-75 absolute top-0 left-0
          w-full h-full bg-gray-800
        "
        >
          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className=" bg-btn hover:bg-gray-200 text-white font-semibold hover:text-btn hover:bg-transparent border border-btn py-2 px-4 rounded-md"
          >
            <GitHub />
          </a>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className=" bg-btn hover:bg-gray-200 text-white font-semibold hover:text-btn hover:bg-transparent border border-btn py-2 px-4 rounded-md"
          >
            <Visibility />
          </a>
        </div>
      </div>
      <div className="px-6 py-4 ">
        <div className="font-bold text-xl mb-2 text-white">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>

      {/* <div className="flex overflow-hidden justify-center mb-5">
        <img
          className="inline-block h-10 w-10 rounded-full bg-white shadow-solid"
          src={require("../../assets/icons/bootstrap.png")}
          alt=""
        />
        <img
          className="-ml-2 inline-block h-10 w-10 rounded-full bg-white shadow-solid"
          src={require("../../assets/icons/csharp.png")}
          alt=""
        />
        <img
          className="-ml-2 inline-block h-10 w-10 rounded-full bg-white shadow-solid"
          src={require("../../assets/icons/HTML.png")}
          alt=""
        />
        <img
          className="-ml-2 inline-block h-10 w-10 rounded-full bg-white shadow-solid"
          src={require("../../assets/icons/javascript.png")}
          alt=""
        />
        <img
          className="-ml-2 inline-block h-10 w-10 rounded-full bg-white shadow-solid"
          src={require("../../assets/icons/php.png")}
          alt=""
        />
        <img
          className="-ml-2 inline-block h-10 w-10 rounded-full bg-white shadow-solid"
          src={require("../../assets/icons/react.png")}
          alt=""
        />
        <img
          className="-ml-2 inline-block h-10 w-10 rounded-full bg-white shadow-solid"
          src={require("../../assets/icons/tailwind.png")}
          alt=""
        />
      </div> */}
    </div>
  );
};
