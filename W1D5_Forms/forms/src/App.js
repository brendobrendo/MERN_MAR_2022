import './App.css';
import React, {useState} from 'react';
import Form from './components/Form';

function App() {

  const [users, setUsers] = useState([
    {
      username: "john",
      email: "j@j.com"
    },
    {
      username: "bob",
      email: "b@b.com"
    }
  ])

  const addUser = () => {
    console.log("addUser from App.js");
  }

  return (
    <div className="App">
      <h1>FORMS</h1>
      app.js state var: <br/>
      {JSON.stringify(users)}
      <hr />
      <Form users={users} addUser={addUser}/>
    </div>
  );
}

export default App;
