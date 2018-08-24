import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
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
      password:"",
      toDashboard:false
      
    };

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit = () => {
   
    this.setState({toDashboard:true})
    return this.props.history.push('/dashboard')
    console.log(this.state.toDashboard)
    }

  render() {
    if (this.state.toDashboard === true) {
      
    }
    return (
     <div>
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
           <RaisedButton label="Submit" primary={true} style={style} onClick={this.handleSubmit}/>
           <br />
          
           <a className = "signup" href = "/signup">  create a new account </a>
       </div>
       </MuiThemeProvider>
       </div>    
    );
  }
}

const style = {
  margin: 15,
  
};
 export default Login;