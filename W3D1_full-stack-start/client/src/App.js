import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import ShowOne from "./components/ShowOne";

function App() {

  const [usersData, setUsersData] = useState([])

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8000/api/users")
      .then(res => {
        console.log(res.data.allUsers);
        setUsersData(res.data.allUsers);
      })
      .catch(err => console.log(err))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name, age);

    const newUser = {
      name: name,
      age: age
    }

    // make a request to the server!
    axios.post("http://localhost:8000/api/users", newUser)
      .then(res => {
        console.log("success⭐⭐⭐:", res.data);
      })
      .catch(err => {
        console.log("ERROR 🔴🔴", err);
      })
  }


  return (
    <div className="App">
      <h1>Users 👥</h1>
      <hr />

      <Switch>

        <Route path="/:someId">
          <ShowOne />
        </Route>

      </Switch>
      <p>
        {
          // JSON.stringify(usersData)
        }
      </p>
      {
        usersData.map((user, idx) => {
          return <p key={user._id}><Link to={"/"+user._id}> {user.name} - {user.age}</Link></p>
        })
      }
      <hr />

      <p>
        {JSON.stringify(name)} : {JSON.stringify(age)}
      </p>

      <form onSubmit={handleSubmit} >
        <p>name:
          <input onChange={e => setName(e.target.value)} value={name} />
        </p>
        <p>
          age:
          <input type="number" onChange={e => setAge(e.target.value)} value={age} />
        </p>

        <button>create</button>
      </form>
    </div>
  );
}

export default App;
