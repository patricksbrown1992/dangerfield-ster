import React from 'react';
import logo from './logo.svg';
import './App.css';
import JokeForm from './jokes/jokesIndex';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rodney Dangerfield</h1>
        <JokeForm />
      </header>
    </div>
  );
}

export default App;
