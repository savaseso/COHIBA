import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'
import Order from './components/Order'
import Payment from './components/Payment'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/About' component={About}/>
          <Route path='/Products' component={Products}/>
          <Route path='/Order' component={Order}/>
          <Route path='/Payment' component={Payment}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
