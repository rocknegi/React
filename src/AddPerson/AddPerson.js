import React, { Component } from 'react';
import './AddPerson.css'
import Header from '../Dashboard/Header/Header'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';



class AddPerson extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "open": false,
            "show": null,
            name: '',
            dob: '',
            gender: '',
            bloodgroup: '',
            age: ''
        }
    }

    handleToggle = () => this.setState({ open: !this.state.open });
    showBar = () => {
        this.setState({ show: 'bar', open: false });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };


    render() {
        return (
            <div>
                <Header
                    headerName="Add Person"

                >
                </Header>

                <MuiThemeProvider>

                    <div className='Person'>
                        <TextField
                            hintText="Enter patient's name"
                            floatingLabelText="Name"
                            onChange={(event, newValue) => this.setState({ name: newValue })}
                        />
                        <br />
                        <TextField
                            hintText="dd/mm/yyyy"
                            floatingLabelText="DOB"
                            onChange={(event, newValue) => this.setState({ dob: newValue })}
                        />
                        <br />
                        <TextField
                            hintText="In numbers only "
                            floatingLabelText="Age"
                            onChange={(event, newValue) => this.setState({ age: newValue })}
                        />

                        <br />

                        <InputLabel htmlFor="bloodgroup">Blood Group</InputLabel>
                        <Select
                            value={this.state.bloodgroup}
                            onChange={this.handleChange}
                            input={<Input name="bloodgroup" id="bloodgroup" />}
                        >


                            <MenuItem value="">
                                <em>None</em>

                            </MenuItem>
                            <MenuItem value={1}>A+</MenuItem>
                            <MenuItem value={2}>A-</MenuItem>
                            <MenuItem value={3}>B+</MenuItem>
                            <MenuItem value={4}>B-</MenuItem>
                            <MenuItem value={5}>O+</MenuItem>
                            <MenuItem value={6}>O-</MenuItem>
                            <MenuItem value={7}>AB+</MenuItem>
                            <MenuItem value={8}>AB-</MenuItem>
                        </Select>
                        <br />
                        <InputLabel htmlFor="gender">Gender</InputLabel>
                        <Select
                            value={this.state.gender}
                            onChange={this.handleChange}
                            input={<Input name="gender" id="gender" />}
                        >

                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={1}>Male</MenuItem>
                            <MenuItem value={2}>Female</MenuItem>
                            <MenuItem value={3}>Others</MenuItem>
                        </Select>
                        <br />
                        <RaisedButton label="Submit" primary={true} style={style} onClick={this.handleSubmit} />
                    </div>
                </MuiThemeProvider>





            </div>

        );
    }
}
const style = {
    margin: 15,

};

export default AddPerson;