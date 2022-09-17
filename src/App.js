import logo from './logo.svg';
import './App.css';

import { blockNo, gasPrice } from './quickNode/basic';
import { useEffect } from 'react';

function App() {

  useEffect(() =>{
    (async() => {
      blockNo([]);
      gasPrice([]);
    })();
  }, []);
  
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
  );
}

export default App;
