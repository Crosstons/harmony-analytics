import './App.css';
 import Landing from './screens/Landing';
// import Loader from './screens/Loader';
import { useEffect } from 'react';
import { getHRCBalances} from './covalent/api';
import { historical_bal } from './covalent/funcs';
// import moment from 'moment/moment';
import Dashboard from './screens/Dashboard';
let bal;

function App() {

  useEffect(() =>{
    (async() => {
      bal = await getHRCBalances("one1hs3l2xray42ydr0ney7rpv8mqyqxgl4xlzlgv8");
      console.log(bal);
//      const test = historical_bal(bal,30);
//      console.log(test);
    })();
  }, []);
  
  return (
    <Dashboard data={bal}/>
  );
}

export default App;
