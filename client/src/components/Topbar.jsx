import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiArrowUpRight, FiLogOut } from 'react-icons/fi';
import { FaShoppingCart } from 'react-icons/fa';
import { BsMusicNoteList } from 'react-icons/bs';

const Topbar = ({ login, setLogin }) => {
  // const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef(null);
  const [dropdownMenuOpen, setDropdownMenuOpen] = useState(true);

  useEffect(() => {
    const pageClickEvent = (e) => {
      // If the active element exists and is clicked outside of
      if (
        dropdownRef.current !== null &&
        !dropdownRef.current.contains(e.target)
      ) {
        setDropdownMenuOpen((prev) => !prev);
      }
    };

    // If the item is active (ie open) then listen for clicks
    if (!dropdownMenuOpen) {
      window.addEventListener('click', pageClickEvent);
    }

    return () => {
      window.removeEventListener('click', pageClickEvent);
    };
  }, [dropdownMenuOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // navigate(`/search/${searchTerm}`);
  };

  return (
    <>
      <div className="flex flex-row items-center justify-between w-full h-16 m-0 bg-gray-300 dark:bg-gray-700 bg-opacity-90 shadow-lg">
        <div className="hidden lg:flex ml-3 font-mono text-3xl tracking-widest font-bold text-cyan-500">
          MUZIC
        </div>

        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className="p-2 text-gray-400 focus-within:text-gray-600"
        >
          <label htmlFor="search-field" className="sr-only">
            Search all files
          </label>
          <div className="flex flex-row justify-start items-center">
            <FiSearch aria-hidden="true" className="w-5 h-5 ml-4" />
            <input
              name="search-field"
              autoComplete="off"
              id="search-field"
              className="flex-1 bg-transparent border-none placeholder-gray-500 outline-none text-base text-white p-4"
              placeholder="Search"
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </form>

        {login ? (
          <div
            className="hidden md:flex mr-3 max-w-[180px] flex-row items-center justify-between bg-slate-400 border-slate-400 rounded-full border-4 cursor-pointer hover:ring-2"
            ref={dropdownRef}
            onClick={() => setDropdownMenuOpen((prev) => !prev)}
          >
            <div className="truncate mx-2 font-bold font-mono ">
              asdfasdfasdfasdf
            </div>
            <div className="h-10 w-10  user cursor-pointer relative ring-blue-700/30 rounded-full bg-cover bg-center bg-[url('./assets/user.png')] ">
              <div
                className={`absolute ${
                  dropdownMenuOpen === true && 'hidden'
                } right-0 z-10 mt-12 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none `}
              >
                <Link
                  to={'/around-you'}
                  className="flex flex-row gap-1 items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                >
                  <FaShoppingCart /> Shop
                </Link>
                <Link
                  to={'/around-you'}
                  className="flex flex-row gap-1 items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                >
                  <BsMusicNoteList /> My Playlist
                </Link>
                {/* divider */}
                <div className="flex-grow border-t border-gray-400 mx-4"></div>
                <Link
                  to={'/around-you'}
                  className="flex flex-row gap-1 items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                >
                  Profile <FiArrowUpRight />
                </Link>
                <Link
                  to={'/'}
                  className="flex flex-row gap-1 items-center px-4 py-2 text-sm text-red-500 hover:bg-gray-200"
                  onClick={() => setLogin(false)}
                >
                  <FiLogOut className="rotate-180" /> Log out
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div
            className="hidden md:flex mr-3 flex-row items-center justify-between bg-slate-400 border-slate-400 rounded-full border-4 cursor-pointer hover:ring-2"
            ref={dropdownRef}
            onClick={() => setDropdownMenuOpen((prev) => !prev)}
          >
            <Link
              to={'/'}
              className="justify-center mx-2 p-2 whitespace-nowrap font-bold font-mono text-black"
              onClick={() => setLogin(true)}
            >
              Log In
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Topbar;
