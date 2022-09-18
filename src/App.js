import logo from './logo.svg';
import './App.css';

import { blockNo, gasPrice } from './quickNode/basic';
import { useEffect } from 'react';
import { getBal } from './quickNode/account_ops';

function App() {

  useEffect(() =>{
    (async() => {
      await blockNo([]).then((value) => {console.log(value)});
      await gasPrice([]).then((value) => {console.log(value)});
      await getBal(["one1n6edazkg9ejc2wvpw35vusc0d0xr6kn0k00mdu", "latest"]).then((value) => {console.log(value)});
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
