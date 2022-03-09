import './App.css';
import SomeClassComponent from './components/SomeClassComponent';
import Second from './components/Second';

function App() {

  console.log("hello react!@");
  const person = {
    name: "john",
    age: 33,
    favFood: "🍕"
  };
  const animals = ["tiger", "elephant", "zebra"];


  return (
    <fieldset>
      <legend>App.js</legend>
      <div className="App">
        <h1>hello</h1>
        <p>
          person is {JSON.stringify(person)}
        </p>
        <hr />
        <SomeClassComponent 
          person={person}
           y={"hello"}
          animals={animals}
        />
        <Second animals={animals}/>


      </div>
    </fieldset>
  );
}

export default App;
