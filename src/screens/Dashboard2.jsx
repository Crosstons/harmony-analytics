import React from 'react'
import Navbar from '../components/Navbar';
import { TxList } from '../components/txList';

function Dashboard2() {
  return (
    <>
    <div>
        <Navbar />
    </div>
    <div className="">
    <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap m-4">
            <div className="p-4 md:w-full">
            <div className="h-full bg-sss border border-gray-700 shadow-md w-full mx-4 rounded-lg overflow-hidden py-10 ">
              <div className="p-3">
            <TxList />
            </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Dashboard2