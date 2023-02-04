import React, { useState } from 'react';

function NavBar() {
  const [navVisibility, setNavVisibility] = useState('md:flex hidden');

  // Main body backgound color : orange-100 etc

  const toggleNav = () => {
    if (navVisibility === 'md:flex hidden') {
      setNavVisibility('md:flex');
    } else {
      setNavVisibility('md:flex hidden');
    }
    // console.log(showNav);
  };

  return (
    <div className="bg-red-700 md:flex md:justify-between shadow-md shadow-gray-400">
      <div className="flex justify-between">
        <p className="font-CNY text-5xl text-amber-500 p-3 ml-2">
          Chinese Zodiacs
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="m-3 w-8 stroke-amber-500 cursor-pointer rounded-md border-2 border-red-700 hover:shadow-sm hover:shadow-amber-500 hover:border-amber-500 hover:bg-red-800 md:hidden"
          onClick={toggleNav}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>

      {/* Alternative... make 2 new components (1 is with hidden class and the other without). Make them render based on toggleNav boolean */}
      <div className={navVisibility}>
        <a href="#" className="tab">
          Home
        </a>
        <a href="#" className="tab">
          About
        </a>
        <a href="#" className="tab">
          Contact
        </a>
      </div>
    </div>
  );
}

export default NavBar;
