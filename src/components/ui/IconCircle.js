import React from "react";

export default function IconCircle({
  html = false,
  css3 = false,
  javascript = false,
  bootstrap = false,
  tailwindcss = false,
  react = false,
  reactnative = false,
  cshart = false,
}) {
  return (
    <div className="overflow-visible">
      {html && (
        <img
          className="inline-block h-10 w-10 rounded-full text-white shadow-solid"
          src={require("../../assets/icons/HTML.png")}
          alt=""
        />
      )}
      {css3 && (
        <img
          className="-ml-2 inline-block h-10 w-10 rounded-full text-white shadow-solid"
          src={require("../../assets/icons/CSS3.png")}
          alt=""
        />
      )}{" "}
      {javascript && (
        <img
          className="-ml-2 inline-block h-10 w-10 rounded-full text-white shadow-solid"
          src={require("../../assets/icons/javascript.png")}
          alt=""
        />
      )}
      {bootstrap && (
        <img
          className="-ml-2 inline-block h-10 w-10 rounded-full text-white shadow-solid"
          src={require("../../assets/icons/bootstrap.png")}
          alt=""
        />
      )}
      {tailwindcss && (
        <img
          className="-ml-2 inline-block h-10 w-10 rounded-full text-white shadow-solid"
          src={require("../../assets/icons/tailwind.png")}
          alt=""
        />
      )}
      {react && (
        <img
          className="-ml-2 inline-block h-10 w-10 rounded-full text-white shadow-solid bg-gray-900 p-1"
          src={require("../../assets/icons/react.png")}
          alt=""
        />
      )}
      {reactnative && (
        <img
          className="-ml-2 inline-block h-10 w-10 rounded-full text-white shadow-solid"
          src={require("../../assets/icons/react.png")}
          alt=""
        />
      )}
      {cshart && (
        <>
          <img
            className="-ml-2 inline-block h-10 w-10 rounded-full text-white shadow-solid"
            src={require("../../assets/icons/csharp.png")}
            alt=""
          />
          <p className="text-white font-semibold">Cshar</p>
        </>
      )}
    </div>
  );
}
