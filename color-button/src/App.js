import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
const [color, setColor] = useState('red')
const [disabled, setDisabled] = useState(false)
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
        <button style={{backgroundColor: disabled ? 'grey' : color}} disabled={disabled} onClick={onClick}>to {text}</button>
        <label>
          disable btn
          <input type="checkbox" value={disabled} onChange={() => setDisabled(!disabled)}/>
        </label>
      </header>
    </div>
  );
}

export default App;
