import { useState } from "react";

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
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
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100"
              alt="Profile"
            />
          </button>

          {/* Dropdown menu */}
          {isOpen && (
            <div
              onClick={() => setIsOpen(false)}
              className="absolute right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl"
              onBlur={() => setIsOpen(false)}
            >
              <a
                href="#"
                className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform hover:bg-gray-100"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform hover:bg-gray-100"
              >
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
    );
};

export default Dropdown;