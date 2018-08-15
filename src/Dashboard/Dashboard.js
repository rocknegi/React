import React, { Component } from 'react';
import './Dashboard.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';

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
    };


    render() {
        return (
         <div>
           <MuiThemeProvider>
            <div>
            
            <AppBar className = 'Appbar'
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    title="My Clinic"
                    onLeftIconButtonClick={this.handleToggle}
                />
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}>

                    <AppBar title=""/>
                    <MenuItem id="showFooId" onClick={this.showFoo}>Show Foo</MenuItem>
                    <MenuItem id="showBarId" onClick={this.showBar}>Show Bar</MenuItem>

                </Drawer>
            </div>
           </MuiThemeProvider>
          
           </div>    
        );
      }
    }




export default Dashboard;