import React, { Component } from 'react';
import './Login.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password:""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.username,this.state.password);
    event.preventDefault();
  }


  render() {
    return (
     
       <MuiThemeProvider>
        <div  className="Login">
        <AppBar
        title="Welcome To DockPlus"
         />
         <TextField
           hintText="Enter your Username"
           floatingLabelText="Username"
           onChange = {(event,newValue)=>this.setState({username:newValue})}
           />
         <br/>
           <TextField
             type="password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleSubmit(event)}/>
       </div>
       </MuiThemeProvider>

      
    );
  }
}

const style = {
  margin: 15,
};
 export default Login;