import React from "react";
import { NavLink, Link } from "react-router-dom";
import { GitHub, LinkedIn, YouTube } from "@material-ui/icons";

export const Sidebar = () => {
  return (
    <header className="w-full md:w-1/4 lg:w-1/5 xl:w-1/6 bg-indigo-900 fixed bottom-0 md:static border-background5 md:border-r ">
      <div className="p-2 md:p-6 md:min-h-screen flex flex-col">
        <div className="hidden md:flex md:flex-initial flex-col items-center">
          <picture>
            <img
              className="rounded-full h-32 w-32 border-indigo-700 border-8"
              src={require("../../assets/img/mia.webp")}
              alt="imagen código web"
            />
          </picture>
          <Link to="/" className="mt-2">
            <h2 className=" text-white text-xl tracking-wide text-center font-bold">
              {/* <Reddit style={{ color: "#f6e05e", fontSize: 40 }} />  */}
              Felipe Aguilera
            </h2>
          </Link>

          <nav className=" hidden md:flex md:flex-initial">
            <ul className="grid md:grid-cols-3 gap-1 mx-auto">
              {/* <li className="flex justify-center items-center">
                <a
                  className="hover:bg-indigo-700  rounded-full p-1 xl:p-2"
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram
                    style={{
                      color: "#f6e05e",
                      fontSize: 25,
                    }}
                  />
                </a>
              </li>*/}
              <li className="flex justify-center items-center">
                <a
                  className="hover:bg-indigo-700  rounded-full p-1 xl:p-2"
                  href="https://www.youtube.com/channel/UC9Z71npeh9XvNAIRwTs7WJw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <YouTube style={{ color: "#f6e05e", fontSize: 25 }} />
                </a>
              </li>

              <li className="flex justify-center items-center ">
                <a
                  className="hover:bg-indigo-700  rounded-full p-1 xl:p-2"
                  href="https://github.com/felipeaguileradev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHub style={{ color: "#f6e05e", fontSize: 25 }} />
                </a>
              </li>
              <li className="flex justify-center items-center">
                <a
                  className="hover:bg-indigo-700  rounded-full p-1 xl:p-2"
                  href="https://www.linkedin.com/in/felipe-aguilera-gonzalez-806201168/"
                  target="_blanck"
                  rel="noopener noreferrer"
                >
                  <LinkedIn style={{ color: "#f6e05e", fontSize: 25 }} />
                </a>
              </li>
              {/* <li className="flex justify-center items-center">
                <a
                  className="hover:bg-indigo-700  rounded-full p-1 xl:p-2"
                  href="https://www.facebook.com"
                  target="_blanck"
                  rel="noopener noreferrer"
                >
                  <Twitter style={{ color: "#f6e05e", fontSize: 30 }} />
                </a>
              </li> */}
            </ul>
          </nav>
        </div>

        <nav className="md:my-auto md:mx-auto flex md:flex-col md:pb-8">
          <NavLink
            exact
            activeClassName="text-yellow-400 border-t-4 md:border-l-4 md:border-t-0 border-yellow-400"
            className="p-1 mb-1 md:mb-4 md:pr-3 text-gray-400 text-center md:text-left inline-block hover:text-indigo-700 flex-1 md:border-l-4 border-indigo-900 hover:border-yellow-400 border-t-4 md:border-t-0"
            to="/"
          >
            <svg
              className="h-6 mt-1 md:mt-0 md:mr-3 md:ml-2 inline-block text-yellow-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="text-lg hidden md:inline-block">Inicio</span>
          </NavLink>
          <NavLink
            exact
            activeClassName="text-yellow-400  border-t-4 md:border-l-4 md:border-t-0 border-yellow-400"
            className="p-1 mb-1 md:pr-3 md:mb-4 text-gray-400 text-center md:text-left inline-block hover:border-yellow-400 hover:text-indigo-700 flex-1 md:border-l-4 border-indigo-900 border-t-4 md:border-t-0"
            to="/about"
          >
            <svg
              className="h-6 mt-1 md:mt-0 md:mr-3 md:ml-2 inline-block  text-yellow-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span className="text-lg hidden md:inline-block">Sobre Mí</span>
          </NavLink>
          {/* <NavLink
            exact
            activeClassName="text-yellow-400  border-t-4 md:border-l-4 md:border-t-0 border-yellow-400"
            className="p-1 mb-1 md:pr-3 md:mb-4 text-gray-400 text-center md:text-left inline-block hover:border-yellow-400 hover:text-indigo-700 flex-1 md:border-l-4 border-indigo-900 border-t-4 md:border-t-0"
            to="/services"
          >
            <svg
              className="h-6 mt-1 md:mt-0 md:mr-3 md:ml-2 inline-block
            text-yellow-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="text-lg hidden md:inline-block">Servicios</span>
          </NavLink> */}
          <NavLink
            exact
            activeClassName="text-yellow-400  border-t-4 md:border-l-4 md:border-t-0 border-yellow-400"
            className="p-1 mb-1 md:pr-3 md:mb-4 text-gray-400 text-center md:text-left inline-block  hover:border-yellow-400 hover:text-indigo-700 flex-1 md:border-l-4 border-indigo-900 border-t-4 md:border-t-0"
            to="/projects"
          >
            <svg
              className="h-6  mt-1 md:mt-0 md:mr-3 md:ml-2 inline-block  text-yellow-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
            <span className="text-lg hidden md:inline-block">Proyectos</span>
          </NavLink>
          <NavLink
            exact
            activeClassName="text-yellow-400  border-t-4 md:border-l-4 md:border-t-0 border-yellow-400"
            className="p-1 mb-1 md:pr-3 md:mb-4 text-gray-400 text-center md:text-left inline-block hover:text-indigo-700 flex-1 md:border-l-4 border-indigo-900 hover:border-yellow-400 border-t-4 md:border-t-0"
            to="/contact"
          >
            <svg
              className="h-6 mt-1 md:mt-0 md:mr-3 md:ml-2 inline-block text-yellow-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
            <span className="text-lg hidden md:inline-block">Contacto</span>
          </NavLink>
        </nav>

        <div className="hidden md:flex md:flex-col md:justify-center ">
          <picture>
            <img
              className="mx-auto h-20"
              src={require("../../assets/logo/Recurso2.svg")}
              alt="Logo Felipe Aguilera"
            />
          </picture>
          {/* <p className="p-4 text-white text-center">@felipeaguileradev</p> */}
        </div>
      </div>
    </header>
  );
};
