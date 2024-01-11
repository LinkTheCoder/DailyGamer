import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserNinja } from "react-icons/fa";
import { HiNewspaper } from "react-icons/hi2";
import { GiRetroController } from "react-icons/gi";
import { SiRetroarch, SiNintendoswitch } from "react-icons/si";
import { HiDesktopComputer } from "react-icons/hi";
import { FaXbox, FaPlaystation } from "react-icons/fa";

export default function NavbarSmall() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <footer className="fixed bottom-0 lg:hidden">
      <nav className="backdrop-blur-sm bg-secondary/50 fixed bottom-0 w-full">
        <div className="py-2 flex md:py-4">
          <div className="flex space-x-8 mx-auto">
            <Link to="/Nintendo">
              <div>
                <button
                  className="border-none px-0 py-0 hover:opacity-50 duration-150"
                  id="start"
                >
                  <SiNintendoswitch color="#93c5fd" size="30px" />
                </button>
              </div>
            </Link>

            <Link to="/Playstation">
              <div>
                <button
                  className="border-none px-0 py-0 hover:opacity-50 duration-150"
                  id="start"
                >
                  <FaPlaystation color="#93c5fd" size="2em" />
                </button>
              </div>
            </Link>

            <Link to="/Profile">
              <div>
                <button
                  className="border-none px-0 py-0 hover:opacity-50 duration-150"
                  id="start"
                >
                  <FaUserNinja color="#93c5fd" size="2em" />
                </button>
              </div>
            </Link>

            <Link to="/Xbox">
              <div>
                <button
                  className="border-none px-0 py-0 hover:opacity-50 duration-150"
                  id="start"
                >
                  <FaXbox color="#93c5fd" size="2em" />
                </button>
              </div>
            </Link>

            <div>
              <button
                className="border-none px-0 py-0 hover:opacity-50 duration-150"
                onClick={toggleModal}
              >
                <HiNewspaper color="#93c5fd" size="2em" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          {/* Dark overlay */}
          <div className="bg-gray-900 rounded-lg p-6 relative z-10">
            <ul className="font-bold text-blue-300 space-y-6 text-lg">
              <div className="flex items-center">
                <SiNintendoswitch />
                <Link
                  className="ml-1 mr-5 hover:text-blue-200"
                  to="/Nintendo"
                  onClick={toggleModal}
                >
                  NINTENDO
                </Link>
              </div>
              <div className="flex items-center">
                <FaPlaystation />
                <Link
                  className="ml-1 mr-5 hover:text-blue-200"
                  to="/Playstation"
                  onClick={toggleModal}
                >
                  PLAYSTATION
                </Link>
              </div>
              <div className="flex items-center">
                <FaXbox />
                <Link
                  className="ml-1 mr-5 hover:text-blue-200"
                  to="/Xbox"
                  onClick={toggleModal}
                >
                  XBOX
                </Link>
              </div>
              <div className="flex items-center">
                <HiDesktopComputer />
                <Link
                  className="ml-1 mr-5 hover:text-blue-200"
                  to="/PC"
                  onClick={toggleModal}
                >
                  PC
                </Link>
              </div>
              <div className="flex items-center">
                <GiRetroController />
                <Link
                  className="ml-1 mr-5 hover:text-blue-200"
                  to="/Retro"
                  onClick={toggleModal}
                >
                  RETRO
                </Link>
              </div>
              <div className="flex items-center">
                <SiRetroarch />
                <Link
                  className="ml-1 mr-5 hover:text-blue-200"
                  to="/Indie"
                  onClick={toggleModal}
                >
                  INDIE
                </Link>
              </div>
            </ul>
            <button
              className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              onClick={toggleModal}
            >
              BACK
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
