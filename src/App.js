import logo from './logo.svg';
import './App.css';
import { Button } from './stories/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        <button class='w-20 h-20 bg-black rounded-xl 
        hover:rotate-180 active:animate-in
        transition-all ease-in-out duration-500'>hello</button>
      </header>
    </div>
  );
}

export default App;
