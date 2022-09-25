import './App.css';
import Landing from './screens/Landing';
// import Loader from './screens/Loader';
import { useEffect } from 'react';
import { getHRC20Balances} from './covalent/api';
import { token_balances, portfolio_value24 } from './covalent/funcs';
// import moment from 'moment/moment';
// import Dashboard from './screens/Dashboard';

function App() {

  useEffect(() =>{
    (async() => {
      const bal = await getHRC20Balances("one1hs3l2xray42ydr0ney7rpv8mqyqxgl4xlzlgv8");
      console.log(bal);
      const test = portfolio_value24(bal);
      console.log(test);
    })();
  }, []);
  
  return (
    <Dashboard />
  );
}

export default App;
