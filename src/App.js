import logo from './logo.svg';
import './App.css';
import {Timer} from "./components/Timer"
import { useState } from 'react';

function App() {
  const [show, setShow]= useState(true)
  return (
    <div className="App">

      {show ? <Timer /> : "Time Lapsed"}
      <br></br>
      <button onClick={() => {
        setShow(show ? false : true)
      }}>
        {show ? "Stop Timer" : "Start Timer"}
        </button>

    </div>
  );
}

export default App;
