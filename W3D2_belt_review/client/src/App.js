import './App.css';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import Main from './components/Main';
import Create from './components/Create';
import Update from './components/Update';
import ViewOne from './components/ViewOne';

function App() {
  return (
    <div className="App">
      <h1>Notes 📝</h1>
      <Link to="/">home</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/notes/new">Create</Link>
      <hr />

      <Switch>
        {/* CREATE */}
        <Route path="/notes/new">
          <Create />
        </Route>

        {/* UPDATE */}
        <Route path="/notes/update/:id">
          <Update/>
        </Route>

        {/* SHOW ONE */}
        <Route path="/notes/:id">
          <ViewOne/>
        </Route>


        {/* MAIN - ALL NOTES */}
        <Route path="/notes">
          <Main />
        </Route>

        {/* REDIRECT */}
        <Route path="/">
          <Redirect to="/notes" />
        </Route>

      </Switch>




    </div>
  );
}

export default App;
