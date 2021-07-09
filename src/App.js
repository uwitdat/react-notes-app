import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/home/Home'
import Favorites from './components/notes/Favorites';
import NoteDetail from './components/notes/NoteDetail';
import EditForm from './components/notes/EditForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <div className="Container">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/favorites' component={Favorites} />
          <Route path='/note/:id' component={NoteDetail} />
          <Route path='/editform/:id' component={EditForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
