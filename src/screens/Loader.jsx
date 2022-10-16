import React from 'react'

function Loader() {
  return (
    <div className="min-h-min min-w-min">
        <div className="right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
            <div className="border-t-transparent border-solid animate-spin  rounded-full border-spicy border-8 h-32 w-32"></div>
        </div>
    </div>
  )
}

export default Loader;