import { Link } from "react-router-dom";
import { GiRetroController } from "react-icons/gi";
import { SiRetroarch, SiNintendoswitch } from "react-icons/si";
import { HiDesktopComputer } from "react-icons/hi";
import { FaXbox, FaPlaystation } from "react-icons/fa";

function Nav() {
  
  return (
    <header className="text-gray-600 body-font">
      <div className="items-center justify-center p-5">
        <div className="flex items-center justify-center font-medium text-gray-900 title-font">
          <Link to="/">
            <h1 className="ml-3 text-3xl text-center text-blue-300 hover:text-blue-200">
              DAILY GAMER
            </h1>
          </Link>
        </div>
        <span className="flex flex-wrap items-center justify-center mt-2 mb-2 ml-3 text-sm font-semibold text-gray-400">
          THE LATEST GAMING NEWS
        </span>
        <nav className="flex-wrap items-center justify-center hidden text-blue-300 lg:flex md: md:ml-4 md:py-4 md:pl-4">
          <div className="flex items-center">
            <SiNintendoswitch />
            <Link className="ml-1 mr-5 hover:text-blue-200" to="/Nintendo">
              NINTENDO
            </Link>
          </div>
          <div className="flex items-center">
            <FaPlaystation />
            <Link
              className="ml-1 mr-5 hover:text-blue-200"
              to="/Playstation"
            >
              PLAYSTATION
            </Link>
          </div>
          <div className="flex items-center">
            <FaXbox />
            <Link className="ml-1 mr-5 hover:text-blue-200" to="/Xbox">
              XBOX
            </Link>
          </div>
          <div className="flex items-center">
            <HiDesktopComputer />
            <Link className="ml-1 mr-5 hover:text-blue-200" to="/PC">
              PC
            </Link>
          </div>
          <div className="flex items-center">
            <SiRetroarch />
            <Link className="ml-1 mr-5 hover:text-blue-200" to="/Retro">
              RETRO
            </Link>
          </div>
          <div className="flex items-center">
            <GiRetroController />
            <Link className="ml-1 mr-5 hover:text-blue-200" to="/Indie">
              INDIE
            </Link>
          </div>
        </nav>
        </div>
    </header>
  );
}

export default Nav;
