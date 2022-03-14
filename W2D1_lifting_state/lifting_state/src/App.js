import './App.css';
import React, { useState } from 'react';
import Display from './components/Display';
import Input from './components/Input';

function App() {

  // original state
  // const animalsArray = ["🦓", "🦁", "🐘", "🐒"];

  // const [animals, setAnimals] = useState(animalsArray)
  const [animals, setAnimals] = useState(["🦓", "🦁", "🐘", "🐒"])

  const addAnimal = (expectedAnimal) => {
    console.log("app.js", expectedAnimal);

    // making an actual copy of the state (array)
    const copyAnimals = [...animals];
    copyAnimals.push(expectedAnimal);
    console.log(copyAnimals);
    setAnimals(copyAnimals);

    // alternative way
    // setAnimals([...animals, expectedAnimal])
  }

  return (
    <div className="App">
      <fieldset style={{ backgroundColor: '#d0f6ff' }}>
        <legend style={{ backgroundColor: 'white' }}>App.js</legend>
        {
          JSON.stringify(animals)
        }
        <Input
          addAnimal={addAnimal}
          // setAnimals={setAnimals}
          // animals={animals} 
          />
        <Display animals={animals} />
      </fieldset>
    </div>
  );
}

export default App;
