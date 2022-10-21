import './App.css';
import Landing from './screens/Landing';
import Dashboard from './screens/Dashboard';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Dashboard2 from './screens/Dashboard2';
import Error from './screens/Error';

function App() {
  
  return (
    <div className="App">
      <Router> 
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard/" element={<Dashboard/>} />
          <Route path="/hrc721/" element={<Dashboard2/>} />
          <Route path="/error/" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
