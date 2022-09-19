import React from 'react'

function Loader() {
  return (
    <div className="w-full h-full bg-extreme">
        <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 bg-extreme">
            <div className="border-t-transparent border-solid animate-spin  rounded-full border-spicy border-8 h-64 w-64"></div>
        </div>
    </div>
  )
}

export default Loader