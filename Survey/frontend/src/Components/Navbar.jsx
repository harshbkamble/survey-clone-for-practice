import React from "react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50">
      {/* Top navbar */}
      <nav className="bg-white-500 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Survey Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
              Survey
            </span>
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a
              href="#"
              className="text-sm text-blue-500 hover:underline"
            >
              Login
            </a>
            <button className="bg-yellow-600 text-white px-4 py-2 rounded">
              Demo Survey
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
