import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
const [color, setColor] = useState('red')
const [text, setText] = useState('to blue')
const onClick = () => {
  setColor('blue')
  setText('to red')
}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button style={{backgroundColor: color}} onClick={onClick}>{text}</button>
      </header>
    </div>
  );
}

export default App;
