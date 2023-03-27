import './App.css';
import Header from "./components/Header"
import ClassComponent from './components/ClassComponent';
import Benvenuto from './components/Benvenuto';

// in jsx gli attributi multi-parola hanno il camelcase
// invece di class si usa "className"

const App = function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <ClassComponent></ClassComponent>
        <Benvenuto printedName="Emanuele" colorOfTheText="red"/>
        <Benvenuto printedName="Giorgia" colorOfTheText="blue"/>
        <Benvenuto printedName="Antonio" colorOfTheText="green"/>
        <img src="https://placekitten.com/800" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
