import './App.css';
import Nav from './components/Nav';
import Order from './components/Order';
import SearchBar from './components/SearchBar';
import Videogames from './components/Videogames';
import { Route, Switch } from 'react-router-dom';
import VideogameDetail from './components/VideogameDetail';
import CreateVideogame from './components/CreateVideogame';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/videogames/create">
          <Nav />
          <CreateVideogame />
        </Route>
        <Route path="/videogames/:id">
        <Nav />
        <VideogameDetail />
        </Route>
        <Route path="/videogames">
          <Nav />
          <SearchBar />
          <Order />
          <Videogames />
        </Route>
      </Switch>
    </div>
  );
}

export default App;