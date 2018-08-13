import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password:""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    const target = event.target;
    const value = target.type = target.value;
    const name = target.name;

    this.setState({
        [name]: value
    });
}

  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.username,this.state.password);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name = "username"value={this.state.username} onChange={this.handleChange} />
        </label>
        <label>
          password:
          <input type="password" name = "password" value={this.state.password} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
 export default Login;