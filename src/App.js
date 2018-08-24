import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Login from './Login/Login'
import Signup from './Signup/Signup';
import Dashboard from './Dashboard/Dashboard';
import MyClinic from './Dashboard/MyClinic';
import Patients from './Dashboard/Patients';
import Appointments from './Dashboard/Appointments';
import Expenses from './Dashboard/Expenses';
import Drugs from './Dashboard/Drugs';
import Engage from './Dashboard/Engage';
import AddPerson from './AddPerson/AddPerson';

class App extends Component {

  render() {
    return (  
      <div>
      <Route path ="/" exact component = {Login}/>
      <Route path ="/signup" exact component = {Signup}/>
      <Route path ="/dashboard" exact component = {Dashboard}/>
      <Route path ="/addPerson" exact component = {AddPerson}/>
      <Route path ="/dashboard/MyClinic" exact component = {MyClinic}/>
      <Route path ="/dashboard/Patients" exact component = {Patients}/>
      <Route path ="/dashboard/Appointments" exact component = {Appointments}/>
      <Route path ="/dashboard/Expenses" exact component = {Expenses}/>
      <Route path ="/dashboard/Drugs" exact component = {Drugs}/>
      <Route path ="/dashboard/Engage" exact component = {Engage}/>
 </div>
    );
  }
}

export default App;
