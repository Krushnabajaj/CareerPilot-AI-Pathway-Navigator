import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav class="border-gray-200 bg-slate-800  flex-col">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
          <div>
            <button
              data-collapse-toggle="navbar-hamburger"
              type="button"
              class="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none"
            >
              <svg
                class="w-6 h-5 hover:block"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div>
            <div class="hidden w-25 " id="navbar-hamburger">
              <ul class="flex flex-col font-medium mt-4 rounded-lg bg-slate-50 hover:bg-slate-800 hover:border-gray-700">
                <li>
                  <a
                    href="/questions"
                    class="block py-2 px-3 text-white bg-slate-700 rounded "
                  >
                    Questions
                  </a>
                </li>
                <li>
                  <a
                    href="/roadmaps"
                    class="block py-2 px-3 text-gray-900 rounded hover:bg-slate-100 "
                  >
                    Roadmaps
                  </a>
                </li>
                <li>
                  <a
                    href="/newroadmaps"
                    class="block py-2 px-3 text-gray-900 rounded hover:bg-slate-100 "
                  >
                    New Roadmaps
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div
                class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                id="navbar-sticky"
              >
                <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
                  <li>
                    <Link
                      to="/Home"
                      class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "
                      aria-current="page"
                    >
                      START
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/airoadmaps"
                      class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  "
                    >
                      AI Roadmaps
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/teams"
                      class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                    >
                      Teams
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <div class=" rounded-md shadow-sm flex md:order-2 space-x-3 md:space-x-0 ">
              <Link
                to="/login"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 me-2 text-center "
              >
                Log in
              </Link>
            </div>

            <div class="rounded-md shadow-sm flex md:order-2 space-x-3 md:space-x-0">
              <Link
                to="/signup"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 me-2 text-center "
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Dummy Text For Now */}
      <div className="text-white bg-slate-900 flex items-center justify-center h-auto flex-col">
        <h1 className="items-center justify-center text-6xl ">CareerPilot</h1>
      </div>
    </div>
  );
}

export default Navbar;
