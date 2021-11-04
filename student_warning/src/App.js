import React from 'react';
import './App.css';
import LoginPage from './components/Login/login'
import Dashboard from './components/Dashboard/dashboard';
import StudentsView from './components/StudentsView/studentsView'
import Test  from './components/test';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path ='/login'>
            <LoginPage/>
          </Route>
          <Route path ='/dashboard'>
            <Dashboard/>
          </Route>
          <Route path ='/test'>
            <Test/>
          </Route>
          <Route path ='/students'>
            <StudentsView/>
          </Route>
        </Switch>
      </div>    
      </Router>
    
  );
}

export default App;
