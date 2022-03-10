import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionalComp from './components/FunctionalComp';

function App() {

  const person = {
    firstName: "john",
    favFood: "pizza",
    favNum: 7
  }

  const animals = ["zebra", "elephant", "lion"];

  return (
    <div className="App">
      <h1>hello</h1>
      <ClassComponent person={person} animals={animals}/>
      <FunctionalComp num={10} person={person} animals={animals}/>
    </div>
  );
}

export default App;
