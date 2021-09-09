import React from 'react';
import './App.css';
import LoginPage from './components/Login/login'
import Dashboard from './components/Dashboard/dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
        </Switch>
      </div>    
      </Router>
    
  );
}

export default App;
