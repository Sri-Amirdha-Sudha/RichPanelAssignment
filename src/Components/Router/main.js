import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navbar from './comps/Navbar'
import home from './Pages/Home'
import chat from './Pages/chat'
function mains(){
  return (
    <>
    <div className="App">
    <Router>
    <Navbar />
    <Switch>
      <Route exact path='/main' />
      <Route path='/main/home' component={home} />
      <Route path='/main/conversation' component={chat} />
    </Switch>
    </Router>
    
    </div>
    </>
  );
}

export default mains;
