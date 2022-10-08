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
      <button type="button" className="inline-flex text-white bg-spicy hover:bg-emerald-600 focus:ring-4 focus:outline-none rounded-lg text-md px-5 py-2.5 text-center mr-3 md:mr-0">
      <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 text-mild" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="translate(2.5 3)"><path d="M19.1389383,11.3957621 L15.0906357,11.3957621 C13.6041923,11.3948508 12.399362,10.1909319 12.3984507,8.70448849 C12.3984507,7.21804511 13.6041923,6.01412622 15.0906357,6.01321486 L19.1389383,6.01321486"/><line x1="15.549" x2="15.237" y1="8.643" y2="8.643"/><path d="M5.24766462,1.52259158e-14 L13.8910914,1.52259158e-14 C16.7892458,1.52259158e-14 19.138756,2.34951014 19.138756,5.24766462 L19.138756,12.4246981 C19.138756,15.3228526 16.7892458,17.6723627 13.8910914,17.6723627 L5.24766462,17.6723627 C2.34951014,17.6723627 1.69176842e-15,15.3228526 1.69176842e-15,12.4246981 L1.69176842e-15,5.24766462 C1.69176842e-15,2.34951014 2.34951014,1.52259158e-14 5.24766462,1.52259158e-14 Z"/><line x1="4.536" x2="9.935" y1="4.538" y2="4.538"/></g></svg>Wallet</button>
      
  </div>
  <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-cta">
  </div>
  </div>
</nav>



  )
}

export default Navbar;