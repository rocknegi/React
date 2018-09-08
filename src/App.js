import React, {Component} from 'react';
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
import Diagnosis from './Dashboard/Diagnosis/Diagnosis';
import PastVisits from './Dashboard/Diagnosis/PastVisits';
import Billing from './Dashboard/Diagnosis/Billing';
import References from './Dashboard/Diagnosis/References';
import Diagnosis2 from './Dashboard/Diagnosis/Diagnosis2';
import Complaints from './Dashboard/Diagnosis/Complaints';

class App extends Component {

    render() {
        return (
            <div>
                <Route path="/" exact component={Login}/>
                <Route path="/signup" exact component={Signup}/>
                <Route path="/dashboard" exact component={Dashboard}/>
                <Route path="/addPerson" exact component={AddPerson}/>
                <Route path="/dashboard/MyClinic" exact component={MyClinic}/>
                <Route path="/dashboard/Patients" exact component={Patients}/>
                <Route path="/dashboard/Appointments" exact component={Appointments}/>
                <Route path="/dashboard/Expenses" exact component={Expenses}/>
                <Route path="/dashboard/Drugs" exact component={Drugs}/>
                <Route path="/dashboard/Engage" exact component={Engage}/>
                <Route path="/dashboard/Diagnosis" exact component = {Diagnosis}/>
                <Route path="/dashboard/PastVisits" exact component = {PastVisits}/>
                <Route path="/dashboard/Billing" exact component = {Billing}/>
                <Route path="/dashboard/References" exact component = {References}/>
                <Route path="/dashboard/Diagnosis2" exact component = {Diagnosis2}/>
                <Route path="/dashboard/Complaints" exact component = {Complaints}/>

            </div>
        );
    }
}

export default App;
