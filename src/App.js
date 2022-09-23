import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import DinoList from './components/DinoList';

function App() {
  const [dinoData,setDinoData] = useState([]);
  useEffect(()=>{
    dinodataFetch()
  },[])
  async function dinodataFetch(){
     try{
        const res = await fetch("https://raw.githubusercontent.com/avijit-source/json-worldheritage/gh-pages/newdinodata.json");
        const data = await res.json();
        setDinoData(data);
     }catch(e){
       console.log(e);
     }
  }
  return (
    <div className="App">
      <h2 className="title">Dinosaur Info</h2>
      <DinoList dinoData={dinoData} />
    </div>
  );
}

export default App;
