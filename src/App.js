import './App.css';
import Landing from './screens/Landing';
import Dashboard from './screens/Dashboard';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <Router> 
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard/" element={<Dashboard/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
