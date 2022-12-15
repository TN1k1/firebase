import { useEffect, useState } from 'react';
import Person from './components/Person';
import './App.css';

function App() {

const[people, setPeople] = useState([]);

useEffect(() => {
  fetch('https://swapi.dev/api/people')
  .then(res => res.json())
  .then((data) => {
    setPeople(data.results)
    console.log(data.results);
  })
}, [])

  return (
    <div className="App">
      {people.map((person, i) => <Person key={i} name={person.name} heigh={person.height} mass={person.mass}/>)}
    </div>
  );
}

export default App;
