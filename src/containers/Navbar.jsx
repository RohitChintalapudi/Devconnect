import { NavLink } from "react-router-dom";

export default function Navbar() {
    
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex flex-row justify-center items-center mt-2 pb-2 shadow-2xl">

      <ul className="flex flex-row items-center justify-evenly gap-20 scale-105 p-4">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-bold transition-all duration-150 ease-in px-4 py-2 rounded-xl  hover:outline-2 hover:outline-white
              ${
                isActive
                  ? "backdrop-blur-2xl shadow-2xl bg-gradient-to-br from-blue-700 outline-2 outline-white via-violet-700 to-fuchsia-700 bg-opacity-80 scale-105 text-white drop-shadow-[0_0_10px_rgba(147,51,234,0.9)]"
                  : ""
              }
              hover:backdrop-blur-md hover:shadow-xl hover:bg-white/30 hover:scale-105`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `font-bold transition-all duration-150 ease-in px-4 py-2 rounded-xl  hover:outline-2 hover:outline-white
              ${
                isActive
                  ? "backdrop-blur-2xl shadow-2xl bg-gradient-to-br from-blue-700 outline-2 outline-white via-violet-700 to-fuchsia-700 bg-opacity-80 scale-105 text-white drop-shadow-[0_0_10px_rgba(147,51,234,0.9)]"
                  : ""
              }
              hover:backdrop-blur-md hover:shadow-xl hover:bg-white/30 hover:scale-105`
            }
          >
            About
          </NavLink>
        </li>
       
        <li>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              `font-bold transition-all duration-150 ease-in px-4 py-2 rounded-xl hover:outline-2 hover:outline-white
              ${
                isActive
                  ? "backdrop-blur-2xl shadow-xl bg-gradient-to-br from-blue-700 outline-2 outline-white via-violet-700 to-fuchsia-700 bg-opacity-80 scale-105 text-white drop-shadow-[0_0_10px_rgba(147,51,234,0.9)]"
                  : ""
              }
              hover:backdrop-blur-md hover:shadow-xl hover:bg-white/30 hover:scale-105`
            }
          >
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `font-bold transition-all duration-150 ease-in px-4 py-2 rounded-xl hover:outline-2 hover:outline-white
              ${
                isActive
                  ? "backdrop-blur-2xl shadow-xl bg-gradient-to-br from-blue-700 outline-2 outline-white via-violet-700 to-fuchsia-700 bg-opacity-80 scale-105 text-white drop-shadow-[0_0_10px_rgba(147,51,234,0.9)]"
                  : ""
              }
              hover:backdrop-blur-md hover:shadow-xl hover:bg-white/30 hover:scale-105`
            }
          >
            Projects
          </NavLink>
        </li>
         <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `font-bold transition-all duration-150 ease-in px-4 py-2 rounded-xl  hover:outline-2 hover:outline-white
              ${
                isActive
                  ? "backdrop-blur-2xl shadow-2xl bg-gradient-to-br from-blue-700 via-violet-700 to-fuchsia-700 outline-2 outline-white bg-opacity-80 scale-105 text-white drop-shadow-[0_0_10px_rgba(147,51,234,0.9)]"
                  : ""
              }
              hover:backdrop-blur-md hover:shadow-xl hover:bg-white/30 hover:scale-105`
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
