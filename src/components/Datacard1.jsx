import React from 'react'
import { portfolio_value } from '../covalent/funcs'

const Datacard1 = ({data, title}) => {

    console.log(data);
//  const val = portfolio_value(data);

  return (
    <div className="w-full h-full">   
      <a href="#" class="block p-6 max-w-sm bg-sss rounded-lg border border-gray-700 shadow-md w-full mx-4">
          <h5 class="mb-2 text-2xl font-thin font-barlow tracking-tight text-spicy">{title}</h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">$</p>
      </a>
    </div>
  )
}

export default Datacard1