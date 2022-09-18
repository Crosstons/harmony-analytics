import logo from './logo.svg';
import './App.css';
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
