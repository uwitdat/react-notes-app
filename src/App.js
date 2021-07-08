import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/home/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <div className="Container">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
