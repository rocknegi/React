import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

class Signup extends Component {
    constructor(props) {
        super(props);
    }
    onSubmit = () => {
        this
            .props
            .history
            .push('/dashboard')
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">

                                <label
                                    style={{
                                    fontSize: '18px'
                                }}>Dr.
                                </label>{' '}
                                <TextField hintText="First Name" floatingLabelText="First Name"/>
                                <TextField hintText="Middle Name" floatingLabelText="Middle Name"/>
                                <TextField hintText="Last Name" floatingLabelText="Last Name"/>
                                <br/>
                                <TextField hintText="Registration no" floatingLabelText="Registration no"/>
                                <br/>
                                <TextField hintText="Email" floatingLabelText="Email"/>
                                <br/>
                                <TextField multiLine floatingLabelText="Address" rows={2}/>
                                <br/>

                                <TextField hintText="City" floatingLabelText="City"/>

                                <TextField hintText="State" floatingLabelText="State"/>
                                <br/>
                                <TextField hintText="PIN" floatingLabelText="PIN"/>

                            </div>
                            <div className="col-md-6">
                                <TextField hintText="Practice" floatingLabelText="Practice"/>
                                <br/>
                                <TextField hintText="Degree" floatingLabelText="Degree"/>
                                <br/>
                                <TextField hintText="Clinic Name" floatingLabelText="Clinic Name"/>
                                <br/>
                                <br/>
                                <RaisedButton primary={true} onClick={this.onSubmit}>Proceed</RaisedButton>
                            </div>
                        </div>
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }

}
export default Signup;
