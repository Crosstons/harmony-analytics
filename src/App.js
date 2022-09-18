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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
