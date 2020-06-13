import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Projects from './Projects';
import Home from './Home';
import Navbar from './Navbar';

function App() {
  return (
    <div >
      <Router>
          <Navbar />
          <div className="container p-4 mx-auto">
        <Switch>
            <Route exact path="/" render={() => <Home />}/>
            <Route exact path="/projects" render={() => <Projects />}/>
        </Switch>
          </div>
      </Router>
    </div>
  );
}

export default App;
