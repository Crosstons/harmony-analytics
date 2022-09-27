import React from 'react';
import logo from '../images/logo.png';
import Waddress  from '../components/Waddress';
function Landing() {
  return ( 
    <div className="">
      <section className="text-gray-400 font-barlow">
    <div className=" mx-auto flex flex-col px-5 py-6 justify-center items-center">
      <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-7 object-cover object-center rounded" alt="hero" src={logo}/>
      <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
        <h1 className="title-font font-extrabold sm:text-6xl lg:text-8xl mb-4 font-barlow text-spicy">Harmony</h1> <h1 className="title-font font-semibol lg:text-6xl sm:text-4xl text-4xl mb-4 font-barlow text-white">Analytics</h1>
        <p className="mb-8 leading-relaxed">Kickstarter biodiesel roof party wayfarers cold-pressed. Palo santo live-edge tumeric scenester copper mug flexitarian. Prism vice offal plaid everyday carry. Gluten-free chia VHS squid listicle artisan.</p>
        <div className="flex w-full justify-center items-end">
          <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-center">
            <Waddress />
            <button className=" mt-5 text-mild bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-emerald-800 shadow-lg dark:shadow-lg shadow-emerald-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-1">Fetch</button>
          </div>
        </div>
      </div>
    </div>
</section>
</div>
   )
}

export default Landing;