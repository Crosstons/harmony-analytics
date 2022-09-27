import './App.css';
// import Landing from './screens/Landing';
// import Loader from './screens/Loader';
import { useEffect } from 'react';
import { getHRC20Balances, getHistorical} from './covalent/api';
import { historical_bal } from './covalent/funcs';
// import moment from 'moment/moment';
 import Dashboard from './screens/Dashboard';

function App() {

  useEffect(() =>{
    (async() => {
      const bal = await getHistorical("one1hs3l2xray42ydr0ney7rpv8mqyqxgl4xlzlgv8", "30");
      console.log(bal);
      const test = historical_bal(bal,30);
      console.log(test);
    })();
  }, []);
  
  return (
    <Landing />
  );
}

export default App;
