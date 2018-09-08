import React, {Component} from 'react';
import './AddPerson.css'
import Header from '../Dashboard/Header/Header'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
const uuidv4 = require('uuid/v4');

class AddPerson extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "open": false,
            "show": null,
            Firstname: '',
            Middlename: '',
            Lastname: '',
            dob: '',
            gender: '',
            bloodgroup: '',
            age: '',
            pin: '',
            state: '',
            occupation: '',
            sex: '',
            blodGroup: '',
            id: '',
            save: false,
            id: ''
        }
    }
    handleToggle = () => this.setState({
        open: !this.state.open
    });
    showBar = () => {
        this.setState({show: 'bar', open: false});
    }

    save = (event) => {
        this.setState({save: true});
        this.setState({id: uuidv4()});
        event.preventDefault();
    }

    saveNext = ()=>{
        this.props.history.push("/dashboard/Diagnosis");
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {
        return (
            <div>
                <Header headerName="Add Person"></Header>
                <MuiThemeProvider>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-2"></div>
                            <div class="col-md-6">

                                <TextField
                                    hintText="Enter patient's first name"
                                    floatingLabelText="First Name"
                                    onChange={(event, newValue) => this.setState({Firstname: newValue})}/>

                                <TextField
                                    hintText="Enter patient's Middle name"
                                    floatingLabelText=" Middle Name"
                                    onChange={(event, newValue) => this.setState({Middlename: newValue})}/>

                                <TextField
                                    hintText="Enter patient's Last name"
                                    floatingLabelText="Last Name"
                                    onChange={(event, newValue) => this.setState({Lastname: newValue})}/>
                                <br/>
                                <TextField
                                    hintText="dd/mm/yyyy"
                                    floatingLabelText="DOB"
                                    onChange={(event, newValue) => this.setState({dob: newValue})}/>
                                <br/>
                                <TextField
                                    hintText="Enter Phone No "
                                    floatingLabelText="Phone No"
                                    onChange={(event, newValue) => this.setState({age: newValue})}/>

                                <br/>
                                <TextField
                                    hintText="xyz@example.com"
                                    floatingLabelText="Email"
                                    onChange={(event, newValue) => this.setState({email: newValue})}/>

                                <br/>
                                <TextField
                                    hintText="Address"
                                    floatingLabelText="Address"
                                    onChange={(event, newValue) => this.setState({Address: newValue})}/>

                                <br/>
                                <TextField
                                    hintText="City"
                                    floatingLabelText="City"
                                    onChange={(event, newValue) => this.setState({Adress: newValue})}/>

                                <br/>
                                <TextField
                                    hintText="PIN"
                                    floatingLabelText="PIN"
                                    onChange={(event, newValue) => this.setState({PIN: newValue})}/>

                                <br/>
                                <TextField
                                    hintText="State"
                                    floatingLabelText="State"
                                    onChange={(event, newValue) => this.setState({age: newValue})}/>

                                <br/>
                            </div>

                            <div class="col-md-4">

                                <TextField
                                    hintText="Occupation"
                                    floatingLabelText="Occupation"
                                    onChange={(event, newValue) => this.setState({age: newValue})}/>
                                <br/>
                                <TextField
                                    hintText="Age"
                                    floatingLabelText="Age"
                                    onChange={(event, newValue) => this.setState({age: newValue})}/>
                                <br/>

                                <div className="Person">

                                    <InputLabel
                                        htmlFor="bloodgroup"
                                        style={{
                                        fontSize: '15px'
                                    }}>Blood Group</InputLabel>
                                    <Select
                                        style={{
                                        fontSize: '15px'
                                    }}
                                        value={this.state.bloodgroup}
                                        onChange={this.handleChange}
                                        input={< Input name = "bloodgroup" id = "bloodgroup" />}>

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
                                    <br/>
                                    <InputLabel
                                        htmlFor="gender"
                                        style={{
                                        fontSize: '15px'
                                    }}>Gender</InputLabel>
                                    <Select
                                        style={{
                                        fontSize: '15px'
                                    }}
                                        value={this.state.gender}
                                        onChange={this.handleChange}
                                        input={< Input name = "gender" id = "gender" />}>

                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={1}>Male</MenuItem>
                                        <MenuItem value={2}>Female</MenuItem>
                                        <MenuItem value={3}>Others</MenuItem>
                                    </Select>
                                    <br/>
                                </div>

                                <RaisedButton label="save" primary={true} style={style} onClick={this.save}/>
                                <RaisedButton
                                    label="Save & Next"
                                    primary={true}
                                    style={style}
                                    onClick={this.saveNext}/>
                            </div>
                            <br/> {this.state.save
                                ? <label>Unique ID : {this.state.id}</label>
                                : null}

                        </div>
                    </div>
                </MuiThemeProvider>
            </div>

        );
    }
}
const style = {
    margin: 15
};

export default AddPerson;
