import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Home from './screens/Home'
import Header from './components/Header'
import About from './screens/About'
import Contact from './screens/Contact'
import Reacties from './screens/Reacties'
import Afhaling from './screens/Afhaling';
import Footer from './components/Footer'






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
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
