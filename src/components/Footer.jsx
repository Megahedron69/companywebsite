import React from "react";

const Footer = () => {
  return (
    <div>
      <footer
        class="text-white body-font flex flex-col justify-center items-center"
        style={{ backgroundColor: "#000000" }}
      >
        <div class="border-t border-gray-800">
          <div class="container px-5 py-8 flex flex-wrap mx-auto items-center">
            <div class="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
              <div class="flex flex-col justify-center item-center relative mt-8 sm:w-64 w-40 sm:mr-4 mr-2">
                <div className="flex flex-col justify-center items-center">
                  <span className="join font-bold lg:text-lg md:text-md  text-white whitespace-nowrap m-1">
                    Join the Adventure newsletter to receive our best vacation
                    deals
                  </span>
                  <br />
                  <span className="text-white text-md subs align-middle whitespace-nowrap font-semibold m-1 text-right">
                    You can unsubscribe at any time
                  </span>
                </div>
                <div className="flex flex-row justify-center items-center mt-3  ">
                  <input
                    type="text"
                    id="footer-field"
                    name="footer-field"
                    pkaceholder="Your Email"
                    class="w-full  text-gray-700 inpute lg:px-24 mr-3 bg-white bg-opacity-40 rounded border border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-white focus:border-indigo-500 text-base outline-none py-1 leading-8 transition-colors duration-200 ease-in-out"
                  />

                  <button class="inline-flex self-center text-white bg-black border-2 border-white py-2 px-6 focus:outline-none hover:bg-white hover:text-black rounded">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container px-5 pl-12 py-24 mx-auto flex items-center justify-around">
          <div class="flex flex-wrap md:text-left text-center -mb-10 -mx-4 text-lg -mt-8">
            <div class="lg:w-1/6 mr-8 md:w-1/2 w-full px-4">
              <h2 class="title-font text-lg font-extrabold text-white tracking-widest mb-5">
                Home
              </h2>
              <nav class="list-none mb-10">
                <li className="mb-1 font-bold">
                  <a class="text-white hover:text-gray-200">First</a>
                </li>
                <li>
                  <a class="text-white hover:text-gray-200">Second </a>
                </li>
                <li>
                  <a class="text-white hover:text-gray-200">Third </a>
                </li>
                <li>
                  <a class="text-white hover:text-gray-200">Fourth </a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/6 mr-8 md:w-1/2 w-full px-4">
              <h2 class="title-font text-lg font-extrabold text-white tracking-widest mb-5">
                Videos
              </h2>
              <nav class="list-none mb-10">
                <li className="mb-1 font-bold">
                  <a class="text-white hover:text-gray-200">First</a>
                </li>
                <li>
                  <a class="text-white hover:text-gray-200">Second </a>
                </li>
                <li>
                  <a class="text-white hover:text-gray-200">Third </a>
                </li>
                <li>
                  <a class="text-white hover:text-gray-200">Fourth </a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/6 mr-8 md:w-1/2 w-full px-4">
              <h2 class="title-font text-lg font-extrabold text-white tracking-widest mb-5">
                Social
              </h2>
              <nav class="list-none mb-10">
                <li className="mb-1 font-bold">
                  <a class="text-white hover:text-gray-200">First</a>
                </li>
                <li>
                  <a class="text-white hover:text-gray-200">Second </a>
                </li>
                <li>
                  <a class="text-white hover:text-gray-200">Third </a>
                </li>
                <li>
                  <a class="text-white hover:text-gray-200">Fourth </a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/6 mr-8 md:w-1/2 w-full px-4">
              <h2 class="title-font text-lg font-extrabold text-white tracking-widest mb-5">
                Contact
              </h2>
              <nav class="list-none mb-10">
                <li className="mb-1 font-bold">
                  <a class="text-white hover:text-gray-200">First</a>
                </li>
                <li>
                  <a class="text-white hover:text-gray-200">Second </a>
                </li>
                <li>
                  <a class="text-white hover:text-gray-200">Third </a>
                </li>
                <li>
                  <a class="text-white hover:text-gray-200">Fourth </a>
                </li>
              </nav>
            </div>
          </div>
        </div>

        <div class="flex flex-row justify-center w-full lg:px-96 bg-opacity-75">
          <div class="container w-full mx-auto py-4 px-5 flex flex-wrap flex-row justify-around items-center sm:flex-row">
            <span className=" text-white text-2xl whitespace-nowrap dark:text-black">
              TRVL
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-3 h-6 sm:h-9"
              height="32"
              width="32"
              viewBox="0 0 448 512"
              style={{ fill: "white" }}
            >
              <path d="M178.7 78.4c0-24.7 5.4-32.4 13.9-39.4-69.5 8.5-149.3 34-176.3 66.4-5.4 7.7-9.3 20.8-9.3 37.1C7 246 113.8 480 191.1 480c36.3 0 97.3-59.5 146.7-139-7 2.3-11.6 2.3-18.5 2.3-57.2 0-140.6-198.5-140.6-264.9zM301.5 32c-30.1 0-41.7 5.4-41.7 36.3 0 66.4 53.8 198.5 101.7 198.5 26.3 0 78.8-99.7 78.8-182.3 0-40.9-67-52.5-138.8-52.5z" />
            </svg>
            <span class="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
              <a class="text-gray-400">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-400">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-400">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
