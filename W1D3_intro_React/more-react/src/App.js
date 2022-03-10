import './App.css';
import ClickComponent from "./components/ClickComponent"

function App() {

  const person = {
    name: "Bob",
    favFood: "🍕",
    age: 33
  }

  return (
    <div className="App">
      <fieldset>
        <legend>App.js</legend>
        <h1 style={{backgroundColor: "red"}}>App.js</h1>
        {JSON.stringify(person)}
        {/* <hr /> */}
        <ClickComponent person={person}/>
        <ClickComponent person={person}/>
        <ClickComponent person={person}/>
      </fieldset>
    </div>
  );
}

export default App;
