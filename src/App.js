import React from 'react';
import './App.css';
import Home from './Components/first';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Main from './Components/Router/main';
function App(){
  return (
    <div className="App">
    <Router>
    <switch>
      <Route exact path='/'>
      <Home />
      </Route>
      <Route path='/main'>
      <Main />
      </Route>
    </switch>
    </Router>
    
     
    
    </div>
  );
}

export default App;



