import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/FirebaseProvider";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useContext(AuthContext)
  return (
    <div>
      <div>
        <div className="relative inline-block">
          {/* Dropdown toggle button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-10 block p-2 text-gray-700 border border-transparent rounded-md"
          >
            <img
              className="object-cover w-12 h-12 rounded-full ring ring-gray-300"
              src={user?.photoURL}
              alt=""
              title={user?.displayName}
            />
          </button>

          {/* Dropdown menu */}
          {isOpen && (
            <div
              onClick={() => setIsOpen(false)}
              className="absolute right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl"
              onBlur={() => setIsOpen(false)}
            >
              <Link to="/dashboard/addPet">
                <button
                  href="#"
                  className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform hover:bg-gray-100 w-full"
                >
                  Dashboard
                </button>
              </Link>

              <button onClick={logout}
                href="#"
                className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform hover:bg-gray-100 w-full"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;