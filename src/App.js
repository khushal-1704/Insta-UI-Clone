import React from 'react'
import './App.css';
import Body from './components/Body';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="bottom">
        <Body />
      </div>
    </div>
  );
}

export default App;
