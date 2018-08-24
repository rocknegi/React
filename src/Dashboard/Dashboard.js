import React, { Component } from 'react';
import './Dashboard.css';
import Header from './Header/Header'

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            "open": false,
            "show": null
           
        }
    }

    handleToggle = () => this.setState({open: !this.state.open});
    showBar = () => {
        this.setState({show: 'bar', open: false });
    }
    
    addPerson = () => {
        window.location.href='/addPerson'    }

    

    render() {
        return (
        <div>
            <Header 
            headerName = "My Clinic"
            
            >
            
            </Header>
            <div className="fab" onClick = {this.addPerson}> + </div>
           </div>    
        );
      }
    }

    
export default Dashboard;
 