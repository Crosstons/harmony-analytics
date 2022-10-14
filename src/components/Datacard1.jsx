import React from 'react';

class Datacard1 extends React.Component {

  render() {
  return (
    <div className="w-full h-full flex justify-center align-middle">   
      <section className="block p-6 max-w-sm h-full bg-sss rounded-lg border border-gray-700 shadow-md w-full mx-4">
          <p className="font-normal font-barlow text-mild text-3xl m-8">{this.props.title}</p>
          <h5 className=" m-8 text-6xl font-bold font-barlow text-spicy">$ {this.props.data}</h5>
      </section>
    </div>
    )
  }
}
export default Datacard1;