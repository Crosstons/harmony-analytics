import './App.css';
import Landing from './screens/Landing';
import Loader from './screens/Loader';
import { useEffect } from 'react';
import { getWalletBalance } from './covalent/api';
import moment from 'moment/moment';
import Dashboard from './screens/Dashboard';

function App() {

  useEffect(() =>{
    (async() => {
      const bal = await getWalletBalance("one1lp064pjyg8ysj73wphry3vgv3mhgrxj3knw3ye");
      console.log(bal);
    })();
  }, []);
  
  return (
    <Dashboard />
  );
}

export default App;
