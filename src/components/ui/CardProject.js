import React from "react";
import { GitHub, Visibility } from "@material-ui/icons";

export const CardProject = ({
  image,
  title,
  description,
  url,
  repo,
  html = false,
  css = false,
  javascript = false,
  react = false,
  react_native = false,
  php = false,
  laravel = false,
}) => {
  return (
    <div className="max-w-sm rounded-md overflow-hidden shadow-lg bg-gradient-to-r from-purple-600 to-indigo-600 ">
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
      <div className="px-6 py-4 bg-indigo-800 ">
        <div className="font-bold text-xl mb-2 text-white">{title}</div>
        <p className="text-gray-400 text-base">{description}</p>
      </div>

      <div className="flex overflow-hidden justify-center flex-wrap mb-5 pt-5 px-2 ">
        {html && (
          <p className="mx-auto border border-gray-300 rounded-md text-sm font-medium py-0.5 px-2 text-gray-300 flex">
            <img
              src={require("../../assets/icons/HTML.svg")}
              alt="logo html"
              className="h-5 mr-1"
            />
            HTML
          </p>
        )}
        {css && (
          <p className="mx-auto border border-gray-300 rounded-md text-sm font-medium py-0.5 px-2 text-gray-300 flex">
            <img
              src={require("../../assets/icons/CSS3.png")}
              alt="logo css"
              className="h-5 mr-1 "
            />
            CSS
          </p>
        )}
        {javascript && (
          <p className="mx-auto border border-gray-300 rounded-md text-sm font-medium py-0.5 px-2 text-gray-300 flex">
            <img
              src={require("../../assets/icons/javascript.png")}
              alt="logo Javascript"
              className=" h-5 mr-1"
            />
            Javascript
          </p>
        )}
        {react && (
          <p className="mx-auto border border-gray-300 rounded-md text-sm font-medium py-0.5 px-2 text-gray-300 flex">
            <img
              src={require("../../assets/icons/react.png")}
              alt="logo React"
              className=" h-5 mr-1"
            />
            React
          </p>
        )}
        {react_native && (
          <p className="mx-auto border border-gray-300 rounded-md text-sm font-medium py-0.5 px-2 text-gray-300 flex">
            <img
              src={require("../../assets/icons/react.png")}
              alt="logo React-Native"
              className=" h-5 mr-1"
            />
            React-Native
          </p>
        )}
        {php && (
          <p className="mx-auto border border-gray-300 rounded-md text-sm font-medium py-0.5 px-2 text-gray-300 flex">
            <img
              src={require("../../assets/icons/php_icon_130857.png")}
              alt="logo PHP"
              className=" h-5 mr-1"
            />
            PHP
          </p>
        )}
        {laravel && (
          <p className="mx-auto border border-gray-300 rounded-md text-sm font-medium py-0.5 px-2 text-gray-300 flex">
            <img
              src={require("../../assets/icons/Laravel.svg")}
              alt="logo Laravel"
              className=" h-5 mr-1"
            />
            Laravel
          </p>
        )}
      </div>
    </div>
  );
};
