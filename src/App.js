import { useEffect, useState } from 'react';
import Person from './components/Person';
import './App.css';
import { addPerson, getPeople } from './DataManager';

function App() {

const[people, setPeople] = useState([]);
const [name, setName] = useState();
const [height, setHeight] = useState();
const [mass, setMass] = useState();

useEffect(() => {
  getPeople().then((peopleData)=>{
    setPeople(peopleData)
  })
  //setPeople (peopleData)

/*  fetch('https://swapi.dev/api/people')
  .then(res => res.json())
  .then((data) => {
    setPeople(data.results)
    console.log(data.results);
  })*/
}, [])

  return (
    <div className="App">
      <input onChange={(e)=>{setName(e.target.value)}} type="text" placeholder='Name'/>
      <input onChange={(e)=>{setHeight(e.target.value)}} type="number" placeholder='Height'/>
      <input onChange={(e)=>{setMass(e.target.value)}} type="number" placeholder='Mass'/>
      <button onClick={async() => {
        await addPerson(name, height, mass)
      }}>SAVE</button>
      {people.map((person, i) => <Person key={i} name={person.name} heigh={person.height} mass={person.mass}/>)}
    </div>
  );
}

export default App;
