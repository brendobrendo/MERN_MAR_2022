import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  // state vars
  const [heroes, setHeroes] = useState([])


  // useEffect
  useEffect(() => {
    axiosHeroes();
    // axios.get("https://akabab.github.io/superhero-api/api/all.json")
    // .then((res) => {
    //   // const {apiData} = res.data; 
    //   console.log(res.data)
    //   setHeroes(res.data);
    // })
    // .catch(err => console.log(err))
  }, [])


  // vanilla fetch method
  const fetchHeroes = () => {
    // console.log("click");
    fetch("https://akabab.github.io/superhero-api/api/all.json")
      .then(res => {
        return res.json()
      })
      .then(jsonRes => {
        console.log(jsonRes);
        setHeroes(jsonRes);
      })
      .catch(someErr => console.log(someErr))
  }

  // Axios method
  const axiosHeroes = () => {
    axios.get("https://akabab.github.io/superhero-api/api/all.json")
      .then((res) => {
        // const {apiData} = res.data; 
        console.log(res.data)
        setHeroes(res.data);
      })
      .catch(err => console.log(err))
  }


  return (
    <div className="App">
      <h1>🦸‍♀️🦸‍♀️ SuperHeroes 🦹‍♀️🦹‍♂️</h1>
      <h4> fetch / Axios / useEffect()</h4>
      <button onClick={fetchHeroes}>fetch SuperHeroes</button>
      <button onClick={axiosHeroes}>Axios SuperHeroes</button>
      <hr />
      {/* {JSON.stringify(heroes)} */}
      <table>
        <thead>
          <tr>
            <th>Hero name</th>
            <th>full name</th>
            <th>Publisher</th>
            <th>Images</th>
          </tr>
        </thead>
        <tbody>
          {
            heroes.length > 1 ? 
            heroes.map((hero, idx) => {
              return (
                <tr key={hero.id}>
                  <td>{hero.name}</td>
                  <td>{hero.biography.fullName === "" ? "UNKNOWN" : hero.biography.fullName}</td>
                  <td>{hero.biography.publisher}</td>
                  <td><img width="60px" src={hero.images.md} alt={`${hero.name}`} /></td>
                </tr>
              )
            }) : "loading"
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
