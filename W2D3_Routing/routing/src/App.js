import './App.css';
import Home from './components/Home';
import Results from './components/Results';
import Form from './components/Form';
import { Switch, Route, Link, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h2>routing</h2>
      {/* <a href="/hello">a tag refreshes the page</a> <br/> */}
      <Link to="/">Home 🏡</Link> |
      <Link to="/results">Results 🏡</Link> |
      <Link to="/form">form </Link>
      <hr />

      <Switch>

        <Route exact path={"/results/:unicorns/:var2"}>
          <Results x={3}/>
        </Route>

        <Route path={"/form"} >
          <Form/>
        </Route>

        <Route path={"/home"}>
          <Home/>
        </Route>

        <Route exact path={"/"}>
          <Redirect to={"/home"} />
        </Route>



      </Switch>

    </div>
  );
}

export default App;
