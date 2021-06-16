// import logo from './logo.svg';
import './App.css';
import ListaDivisas from './ListaDivisas/ListaDivisas';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li><Link to="/">Información</Link></li>
            <li><Link to="/Lista">Lista</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact>
            <h1>Información de la aplicación</h1>
          </Route>
          <Route path="/Lista">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <ListaDivisas nombre="Miguel" titulo="Listado recuperado de divisas"></ListaDivisas>
          </Route>

        </Switch>
      </header>
    </div>
    </Router>
  );
}

export default App;
