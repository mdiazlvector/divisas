// import logo from './logo.svg';
import './App.css';
import ListaDivisas from './ListaDivisas/ListaDivisas';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <ListaDivisas nombre="Miguel"></ListaDivisas>
      </header>
    </div>
  );
}

export default App;
