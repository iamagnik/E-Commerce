import React from "react";
import { CgLogIn } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import { FaCashRegister } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <header class="text-gray-600 body-font bg-purple-200">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            {/* <svg
              xmlns="http://www.w3.org/2000/sv"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg> */}
            <span class="ml-3 text-4xl">AG-Styles</span>
          </a>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center border border-red-500">
            <a class="mr-9 text-black bg-purple-200 hover:text-purple-500 text-2xl cursor-pointer">Home</a>
            <a class="mr-9 text-black bg-purple-200 hover:text-purple-500 text-2xl cursor-pointer">Features</a>
            <a class="mr-9 text-black bg-purple-200 hover:text-purple-500 text-2xl cursor-pointer">About Us</a>
            <a class="mr-9 text-black bg-purple-200 hover:text-purple-500 text-2xl cursor-pointer">Contact Us</a>
          </nav>
          <button class="inline-flex items-center  border-0 py-1 px-3 focus:outline-black hover:bg-gray-200 rounded  mt-4 md:mt-0  mr-3 text-2xl text-black">
          <CgLogIn /> Login
          </button>

          <button class="inline-flex items-center  border-0 py-1 px-3 focus:outline-black hover:bg-gray-200 rounded  mt-4 md:mt-0  mr-3 text-2xl text-black">
          <FaCashRegister /> Register
          </button>

          <button class="inline-flex items-center  border-0 py-1 px-3 focus:outline-black hover:bg-gray-200 rounded  mt-4 md:mt-0 mr-3 text-2xl text-black">
          <FaShoppingCart /> Cart
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
