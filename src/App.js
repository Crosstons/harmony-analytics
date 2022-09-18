import logo from './logo.svg';
import './App.css';
import Landing from './screens/Landing';
import Loader from './screens/Loader'

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
    <Landing />
  );
}

export default App;
