import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Todos from './Todos';
import Todo from './Todo';
import Navbar from './NavBar';
import About from './About';
function App() {

  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
        <Switch>
          <Route exact path="/"> <Todos/> </Route>
          <Route path="/todo/:id"> <Todo/> </Route>
          <Route  path="/About"> <About/> </Route>
        </Switch>
      </div>
    </div>
  </Router>

  );
}

export default App;
