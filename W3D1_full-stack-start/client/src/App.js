import './App.css';
import axios from 'axios';
import React, { useEffect } from 'react';

function App() {

  useEffect(() => {
    axios.get("http://localhost:8000/api/users")
      .then(res => {
        console.log(res);
      })
      .catch( err => console.log(err))
  }, [])



  return (
    <div className="App">
      <h1>connecting the backend to Client</h1>
    </div>
  );
}

export default App;
