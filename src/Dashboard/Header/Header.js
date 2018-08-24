import React, { Component } from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import SvgIcon from '@material-ui/core/SvgIcon';





class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "open": false,
            "show": null

        }
    }

    handleToggle = () => this.setState({ open: !this.state.open });
    showBar = () => {
        this.setState({ show: 'bar', open: false });
    }

    addPerson = () => {
        return this.props.history.push('/addPerson2')
    }

    oddEvent = (match, location) => {
        if (!match) {
            return false
        }

        const eventID = parseInt(match.params.eventID)
        return !isNaN(eventID) && eventID % 2 === 1
    }


    divStyle = {
        color: 'white',
        textDecoration: 'none'

    };


    render() {
        return (
            <div>

                <MuiThemeProvider>
                    <div>
                        <AppBar className='Appbar'
                            iconClassNameRight="muidocs-icon-navigation-expand-more"
                            title={this.props.headerName}
                            onLeftIconButtonClick={this.handleToggle}>
                            <SvgIcon className="iconNotification">
                                <path fill="#000000" d="M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21" />
                            </SvgIcon>
                            <SvgIcon className="iconMessage">
                                <path fill="#000000" d="M20,2A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H6L2,22V4C2,2.89 2.9,2 4,2H20M4,4V17.17L5.17,16H20V4H4M6,7H18V9H6V7M6,11H15V13H6V11Z" />
                            </SvgIcon>

                            <SvgIcon className="iconSettings">
                                <path fill="#000000" d="M19.43,12.97L21.54,14.63C21.73,14.78 21.78,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.03 19.05,18.95L16.56,17.94C16.04,18.34 15.5,18.67 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.78,8.95 21.73,9.22 21.54,9.37L19.43,11L19.5,12L19.43,12.97M6.5,12C6.5,12.58 6.59,13.13 6.75,13.66L4.68,15.36L5.43,16.66L7.95,15.72C8.69,16.53 9.68,17.12 10.8,17.37L11.24,20H12.74L13.18,17.37C14.3,17.13 15.3,16.54 16.05,15.73L18.56,16.67L19.31,15.37L17.24,13.67C17.41,13.14 17.5,12.58 17.5,12C17.5,11.43 17.41,10.87 17.25,10.35L19.31,8.66L18.56,7.36L16.06,8.29C15.31,7.47 14.31,6.88 13.19,6.63L12.75,4H11.25L10.81,6.63C9.69,6.88 8.69,7.47 7.94,8.29L5.44,7.35L4.69,8.65L6.75,10.35C6.59,10.87 6.5,11.43 6.5,12M12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5M12,10.5A1.5,1.5 0 0,0 10.5,12A1.5,1.5 0 0,0 12,13.5A1.5,1.5 0 0,0 13.5,12A1.5,1.5 0 0,0 12,10.5Z" />
                            </SvgIcon>
                        </AppBar>

                        <Drawer
                            docked={false}
                            width={200}
                            open={this.state.open}
                            onRequestChange={(open) => this.setState({ open })}>

                            <AppBar title="" />
                            <div className='Nav'>
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} activeClassName="active" to="/dashboard"><MenuItem>Dashboard</MenuItem></NavLink>
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} activeClassName="active" to="/dashboard/MyClinic"><MenuItem>My Clinic</MenuItem></NavLink>
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} activeClassName="active" to="/dashboard/Patients"><MenuItem>Patients</MenuItem></NavLink>
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} activeClassName="active" to="/dashboard/Appointments"><MenuItem>Appointments</MenuItem></NavLink>
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} activeClassName="active" to="/dashboard/Expenses"> <MenuItem>Expenses</MenuItem></NavLink>
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} activeClassName="active" to="/dashboard/Drugs"><MenuItem>Drugs</MenuItem></NavLink>
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} activeClassName="active" to="/dashboard/Engage"><MenuItem>Engage</MenuItem></NavLink>


                            </div>
                        </Drawer>

                    </div>

                </MuiThemeProvider>




            </div>
        );
    }

}


export default Header;
