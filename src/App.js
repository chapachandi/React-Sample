import React from 'react'
import Customer from './components/Customer'
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Item from './components/Item';
import Order from './components/Order';

export default function App() {
  return (
    <Router>
        <div className="App">
         
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/customer" component={Customer}/>
            <Route path="/item" component={Item}/>
            <Route path="/order" component={Order}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={SignUp}/>
          </Switch>
        
        </div>
    
      </Router>
  )
}
