import logo from './Holberton_logo.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from './utils.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <div className='App-body'> {/* Use <div> instead of <body> */}
        <p>Login to access the full dashboard</p>

        <label htmlFor="email">Email</label>
        <input type="text" id="email" placeholder="Enter your email" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" />
        
        <button>OK</button>
      </div>
      <footer className='App-footer'>Copyright {getFullYear()} - {getFooterCopy(true)}</footer>
    </div>
  );
}

export default App;
