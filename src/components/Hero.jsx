import React from "react";

const Hero = () => {
  return (
    <div>
      <section
        class="bg-white p-8 dark:bg-gray-900"
        style={{
          paddingTop: "175px",
          background: `url(
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=100"
          )`,
          backgroundColor: "rgba(0,0,0,0.5)",
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "700px",
        }}
      >
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 class="adventure mb-4 lg:text-8xl font-black tracking-tight leading-none text-white md:text-5xl sm:text-3xl dark:text-white">
            ADVENTURE AWAITS
          </h1>
          <p class="mb-8 lg:text-4xl font-bold text-white md:text-2xl sm:text-lg sm:px-16 xl:px-48 dark:text-gray-400">
            What are you waiting for?
          </p>
          <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              class="inline-flex justify-center items-center border border-gray-200 py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get started
              <svg
                class="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              class="inline-flex justify-center items-center bg-gray-100 py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              <svg
                class="mr-2 -ml-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
              </svg>
              Watch trailer
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
