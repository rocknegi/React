import React from 'react';
import './DiagnosisHeader.css'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {NavLink} from 'react-router-dom';
class DiagnosisHeader extends React.Component {
    state = {
        value: 10
    };
    handleChange = (event, value) => {
        this.setState({value});

    };

    render() {
        const style = {
            nav: {
                textDecoration: 'none',
                color: '#000000'
            },
            tab: {
                fontSize: '12px'
            },
            active: {
                fontWeight: 'bold',
                color: 'red',
                background: 'white'
            }
        }

        return (

            <div>
                <MuiThemeProvider>
                    <AppBar position="static">
                        <Tabs
                            value={this.state.value}
                            style={{
                            background: '#ffffff'
                        }}>

                            <NavLink style={style.nav} activeStyle={style.active} to="/dashboard/Diagnosis">
                                <Tab label="Vitals" style={style.tab}/>
                            </NavLink>

                            <NavLink
                                style={style.nav}
                                activeStyle={style.active}
                                to="/dashboard/Complaints">
                                <Tab label="Complaints" style={style.tab}/>
                            </NavLink>
                            <NavLink
                                style={style.nav}
                                activeStyle={style.active}
                                to="/dashboard/Diagnosis2">
                                <Tab style={style.tab} label="Diagnosis"/>
                            </NavLink>
                            <NavLink
                                style={style.nav}
                                activeStyle={style.active}
                                to="/dashboard/References">
                                <Tab style={style.tab} label="References & Follow-ups"/>
                            </NavLink>
                            <NavLink style={style.nav} activeStyle={style.active} to="/dashboard/Billing">
                                <Tab style={style.tab} label="Billing & insurance"/>
                            </NavLink>

                        </Tabs>
                    </AppBar>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default DiagnosisHeader;