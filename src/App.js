import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import {Route} from 'react-router-dom'
import Login from './Login/Login'
import Signup from './Signup/Signup';

class App extends Component {

  render() {
    return (
      <BrowserRouter>  
      <div>
      <Route path ="/" exact component = {Login}/>
      <Route path ="/signup" exact component = {Signup}/>
 </div>
 </BrowserRouter>
    );
  }
}

export default App;
