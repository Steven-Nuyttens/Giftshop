import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link, BrowserRouter} from 'react-router-dom'
import Home from './screens/Home'
import Header from './components/Header'
import About from './screens/About'
import Contact from './screens/Contact'
import Reacties from './screens/Reacties'
import Afhaling from './screens/Afhaling';






/*  <Route exact path='/' component={Home}/>
          <Route path='/About' component={About}/>
          <Route path='/Contact' component={Contact}/>

          */
function App() {
  return (
    <BrowserRouter>
    <div>
      <Header />
      <Route exact path='/' component={Home}/>
      <Route path='/About' component={About}/>
      <Route path='/Contact' component={Contact}/>
      <Route path='/Afhaling' component={Afhaling}/>
      <Route path='/Reacties' component={Reacties}/>

    </div>
    </BrowserRouter>
  );
}

export default App;
