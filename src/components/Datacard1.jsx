import React from 'react'

class Datacard1 extends React.Component {

  render() {
  return (
    <div className="w-full h-full">   
      <a href="#" class="block p-6 max-w-sm bg-sss rounded-lg border border-gray-700 shadow-md w-full mx-4">
          <h5 class="mb-2 text-2xl font-thin font-barlow tracking-tight text-spicy">{this.props.title}</h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">${this.props.data}</p>
      </a>
    </div>
    )
  }
}
export default Datacard1