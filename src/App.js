import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'
import Vintages from './components/Vintages'
import Payment from './components/Payment'
import TermsConditions from './components/TermsConditions';
import Default from './components/Default';
import Details from './components/Details'
import CartModal from './components/cart/CartModal';
import Cart from './components/cart/Cart'


function App() {
  return (
    <Router onUpdate={() => window.scrollTo(0, 0)} >
      <div className="App">
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/About' component={About}/>
          <Route path='/Products' component={Products}/>
          <Route path='/Vintages' component={Vintages}/>
          <Route path='/Payment' component={Payment}/>
          <Route path='/TermsConditions' component={TermsConditions}/>
          <Route path='/Details' component={Details}/>
          <Route path='/Cart' component={Cart}/>
          <Route component={Default}/>
        </Switch>
        <CartModal />
      </div>
    </Router>
  );
}

export default App;
