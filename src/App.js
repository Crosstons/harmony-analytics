import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
=======
import Landing from './screens/Landing';
import Loader from './screens/Loader'

import { blockNo, gasPrice } from './quickNode/basic';
>>>>>>> 3ad9a4e5bf52409268704ce5b890330a9cf4b237
import { useEffect } from 'react';
import { getTxs } from './quickNode/account_ops';
import moment from 'moment/moment';

function App() {

  useEffect(() =>{
    (async() => {
      await getTxs([{
          "address": "one1n6edazkg9ejc2wvpw35vusc0d0xr6kn0k00mdu",
          "pageIndex": 0,
          "pageSize": 10,
          "fullTx": true,
          "txType": "ALL",
          "order": "DESC",
      }]).then((value) => {
      //  console.log(moment(parseInt(value[0].timestamp)*1000)._d);
        for(const val of value) {
          console.log(moment(parseInt(val.timestamp)*1000)._d);
        }
      });
    })();
  }, []);
  
  return (
<<<<<<< HEAD
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
=======
    <Landing />
>>>>>>> 3ad9a4e5bf52409268704ce5b890330a9cf4b237
  );
}

export default App;
