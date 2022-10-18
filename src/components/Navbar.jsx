import React from 'react';
import logo from '../images/logo.png';
function Navbar() {
  return (
<nav className="bg-sss border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 w-full h-20 items-center flex">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
  <a href="/" className="flex items-center">
      <img src={logo} className="mr-3 h-6 sm:h-9" alt=""/>
      <span className="self-center text-2xl font-barlow font-semibold whitespace-nowrap text-mild">Harmony Analytics</span>
  </a>
  <div className="flex md:order-2">
  <div className="flex justify-center">
  <label htmlFor="large-toggle" className="inline-flex relative items-center cursor-pointer">
  <input type="checkbox" value="" id="large-toggle" className="sr-only peer"/>
  <div className="w-14 h-7 bg-hot peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-300 dark:peer-focus:ring-emerald-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-spicy"></div>
  <span className="ml-3 text-sm font-medium text-mild dark:text-gray-300">HRC</span>
</label>
</div>
      
  </div>
  <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-cta">
  </div>
  </div>
</nav>



  )
}

export default Navbar;