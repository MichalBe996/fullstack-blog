import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react"

function App() {
  const [message, setMessage] = useState("")
  useEffect(()=>{
    fetch("http://localhost:8000/message")
      .then((res)=> res.json())
      .then((data)=> setMessage(data.msg))
}, [])
  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App;
