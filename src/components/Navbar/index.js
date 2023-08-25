import { Link } from "react-router-dom";
import LoginModal from "../../components/login/LoginModal";

// import { useState } from "react";

// import User from "../../assets/gambar/user.jpg";
import Logo from "../../assets/icon/logo.svg";

function Navbar() {
  // const [isOpen, setIsOpen] = useState(false);

  // Untuk Tombol Hide Show
  // const ArrowUp = (
  //   <svg
  //     xmlns="http://www.w3.org/2000/svg"
  //     data-name="Layer 1"
  //     className="h-5 w-5 text-white"
  //     viewBox="0 0 32 32"
  //     id="up-arrow"
  //   >
  //     <path d="M26 22a2 2 0 0 1-1.41-.59L16 12.83l-8.59 8.58a2 2 0 0 1-2.82-2.82l10-10a2 2 0 0 1 2.82 0l10 10A2 2 0 0 1 26 22Z"></path>
  //   </svg>
  // );

  // const ArrowDown = (
  //   <svg
  //     xmlns="http://www.w3.org/2000/svg"
  //     data-name="Layer 1"
  //     className="h-5 w-5 text-white"
  //     viewBox="0 0 32 32"
  //     id="down-arrow"
  //   >
  //     <path d="M16 22a2 2 0 0 1-1.41-.59l-10-10a2 2 0 0 1 2.82-2.82L16 17.17l8.59-8.58a2 2 0 0 1 2.82 2.82l-10 10A2 2 0 0 1 16 22Z"></path>
  //   </svg>
  // );

  return (
    <nav className="bg-[#007991] sticky top-0 z-50 w-full">
      <div className="w-full flex flex-wrap items-center justify-between py-4 pl-14 pr-6">
        <button
          data-drawer-target="logo-sidebar"
          data-drawer-toggle="logo-sidebar"
          aria-controls="logo-sidebar"
          type="button"
          className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
        <a href="." className="flex items-center">
          <img src={Logo} className="h-12 mr-3" alt="Flowbite Logo" />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-[#007991] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li className="w-full h-full p-1">
              <Link to="/">
                <div className="block py-1 pl-3 pr-4 text-white hover:underline">
                  Home
                </div>
              </Link>
            </li>
            <li className="w-full h-full p-1">
              <Link to="/course">
                <div className="block py-1 pl-3 pr-4 text-white hover:underline">
                  Course
                </div>
              </Link>
            </li>
            <li className="w-full h-full p-1">
              <Link to="/dashboard/user">
                <div className="block py-1 pl-3 pr-4 text-white hover:underline">
                  Dashboard
                </div>
              </Link>
            </li>
            <li className="w-full h-full p-1">
              {/* Login User */}
              <LoginModal />
              {/* Tanpa Login */}
              {/* <div
                className="flex items-center space-x-4 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                <img className="w-10 h-10 rounded-full" src={User} alt="" />
                <div className="w-[20vh] h-8 grid content-center text-white">
                  Much Fahmi
                </div>
                {isOpen ? ArrowUp : ArrowDown}
              </div>
              {isOpen && (
                <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu"
                  >
                    <button
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      role="menuitem"
                      onClick={() => {}}
                    >
                      Quit
                    </button>
                  </div>
                </div>
              )} */}
              {/*  */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
