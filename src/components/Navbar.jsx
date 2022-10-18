import React from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {

  const [first, setFirst] = useState(false);

  const changeFirst = () => {
    if(!first){
      setFirst(true);
      console.log(first);
    }
    else{
      console.log(first);
      setFirst(false);
    }
  }

  return (
    <nav className="bg-sss border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 w-full h-20 items-center flex">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
      <a href="/" className="flex items-center">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt=""/>
          <span className="self-center text-2xl font-barlow font-semibold whitespace-nowrap text-mild">Harmony Analytics</span>
      </a>
      <div className="flex md:order-2">
      <div className="flex justify-center">
      <div className="inline-flex rounded-md shadow-sm" role="group">
      <Link type="button" to="/dashboard/" className={ first ? "py-2 px-4 text-sm font-medium text-mild bg-spicy rounded-l-lg border-r-2 border-emerald-700 hover:bg-spicy hover:text-white focus:z-10 focus:bg-emerald-900 focus:text-white peer-checked:bg-spicy" : "py-2 px-4 text-sm font-medium text-mild bg-hot rounded-l-lg border-r-2 border-emerald-700 hover:bg-spicy hover:text-white focus:z-10 focus:bg-emerald-900 focus:text-white peer-checked:bg-spicy"} onClick={changeFirst}>
        HRC20
      </Link>
      <Link type="button" to="/hrc721/" className={ first ? "py-2 px-4 text-sm font-medium text-mild bg-hot rounded-r-md hover:bg-spicy hover:text-white focus:z-10 focus:bg-emerald-900 " : "py-2 px-4 text-sm font-medium text-mild bg-spicy rounded-r-md hover:bg-spicy hover:text-white focus:z-10 focus:bg-emerald-900"} onClick={changeFirst}>
        NFTs
      </Link>
    </div>
    </div>     
    </div>
      <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-cta">
      </div>
      </div>
    </nav>
  )
}

export default Navbar;