import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios"
import Character from "./components/Character.js" 


const App = () => {
  const [dummyData, setDummyData]= useState([])
  useEffect(()=>{
    axios.get("https://rickandmortyapi.com/api/character/")
    .then ((results)=>{
      setDummyData(results.data.results)
      console.log(results.data.results)
    })
    .catch(err => console.log (err))
  },[])

// const [characterCreate, setCharacterCreate] = useState(dummyData)
// console.log(characterCreate)  
// const createdCharacter = characterID => {
//     setCharacterCreate (()=> characterCreate.map(results => {
//       if (results.id === characterID){
//         return{...results}
//       }
//       else{
//         return results
//       }
//     }))
//   }

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      {dummyData.map((data , index)=>(<Character key = {index} dummyData={data}/>))}
     {/* <Character characterCreate ={characterCreate}/> */}
    </div>
  );
}

export default App;
