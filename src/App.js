import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios"
import Character from "./components/Character.js"

const App = () => {
  const [dummyData, setDummyData]= useState([])
  useEffect(()=>{
    axios.get("https://rickandmortyapi.com/api/character/")
    .then ((data)=>{
      setDummyData(data.data)
      console.log(data.data)
    })
    .cathc(err => console.log (err))
  },[])










  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
     {/* <Character dummyData = {dummyData}/> */}
    </div>
  );
}

export default App;
