import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react"

function App() {
  const [memos, setMemos] = useState([])
  useEffect(()=>{
    fetch("http://localhost:8000/api/v1/memos")
      .then((res)=> res.json())
      .then((data)=> setMemos(data.allMemos))
      console.log(memos)
}, [])
  return (
    <div className="App">
      <h1>{memos[0].title}</h1>
      <h3>{memos[0].memocontent}</h3>
    </div>
  );
}

export default App;
