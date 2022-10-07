import React from 'react';
import Datacard1 from '../components/Datacard1';
import Lchart from '../components/Lchart';
import Navbar from '../components/Navbar';

function Dashboard() {
  return (
    <div className="grid overflow-hidden grid-cols-6 grid-rows-12 gap-4  w-screen h-screen">
    <div className="box row-start-1 row-span-1 col-start-1 col-span-6"><Navbar /></div>
    <div className="box row-start-2 row-span-3 col-start-1 col-span-1"><Datacard1 /></div>
    <div className="box row-start-2 row-span-3 col-start-2 col-span-1"><Datacard1 /></div>
    <div className="box row-start-2 row-span-3 col-start-3 col-span-2"><Lchart /></div>
    <div className="box row-start-2 row-span-3 col-start-5 col-span-2">5</div>
    <div className="box row-start-5 row-span-4 col-start-1 col-span-3">6</div>
    <div className="box row-start-5 row-span-4 col-start-4 col-span-3">7</div>
</div>
  )
}

export default Dashboard;