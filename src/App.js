import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'
import Order from './components/Order'
import Payment from './components/Payment'
import TermsConditions from './components/TermsConditions';
import Default from './components/Default';


function App() {
  return (
    <Router onUpdate={() => window.scrollTo(0, 0)} >
      <div className="App">
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/About' component={About}/>
          <Route path='/Products' component={Products}/>
          <Route path='/Order' component={Order}/>
          <Route path='/Payment' component={Payment}/>
          <Route path='/TermsConditions' component={TermsConditions}/>
          <Route component={Default}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
