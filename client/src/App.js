import './App.css';
import Nav from './components/Nav';
import Order from './components/Order';
import SearchBar from './components/SearchBar';
import Videogames from './components/Videogames';
import { Route, Switch } from 'react-router-dom';
import VideogameDetail from './components/VideogameDetail';
import CreateVideogame from './components/CreateVideogame';

function App() {
  return (
    <div className="App">
      <Nav />
      <SearchBar />
      <Switch>
        <Route path="/videogames/create">
          <CreateVideogame />
        </Route>
        <Route path="/videogames/:id">
          <VideogameDetail />
        </Route>
        <Route path="/videogames">
          <Order />
          <Videogames />
        </Route>
      </Switch>
    </div>
  );
}

export default App;