import React, {Component} from 'react';
import './DiagnosisHeader.css';
import {NavLink} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class DiagnosisHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {

        return (
            <div class="container-fluid">
                <MuiThemeProvider>
                    <div class="row">
                        <div class="col-md-12">

                            <NavLink
                                style={{
                                textDecoration: 'none',
                                color: 'white'
                            }}
                                activeClassName="active"
                                to="/dashboard/Diagnosis">
                                <MenuItem>Vitals</MenuItem>
                            </NavLink>

                            <NavLink
                                style={{
                                textDecoration: 'none',
                                color: 'white'
                            }}
                                activeClassName="active"
                                to="/dashboard/Complaints">
                                <MenuItem>Complaints</MenuItem>
                            </NavLink>
                            <NavLink
                                style={{
                                textDecoration: 'none',
                                color: 'white'
                            }}
                                activeClassName="active"
                                to="/dashboard/Diagnosis2">
                                <MenuItem>Diagnosis</MenuItem>
                            </NavLink>
                            <NavLink
                                style={{
                                textDecoration: 'none',
                                color: 'white'
                            }}
                                activeClassName="active"
                                to="/dashboard/References">
                                <MenuItem>References & Follow-ups</MenuItem>
                            </NavLink>
                            <NavLink
                                style={{
                                textDecoration: 'none',
                                color: 'white'
                            }}
                                activeClassName="active"
                                to="/dashboard/Billing">
                                <MenuItem>Billing & insurance</MenuItem>
                            </NavLink>

                        </div>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }

}

export default DiagnosisHeader;
