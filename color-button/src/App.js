import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
const [color, setColor] = useState('red')
const [enable, setEnable] = useState(false)
const text = color === 'red' ? 'blue' : 'red'
const onClick = () => {
  setColor(color ===  'blue' ? 'red' : 'blue')
}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button style={{backgroundColor: color}} disabled={enable} onClick={onClick}>to {text}</button>
        <input type="checkbox" value={enable} onChange={() => setEnable(!enable)}/>
      </header>
    </div>
  );
}

export default App;
