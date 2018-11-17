import React, {Component} from 'react';
import Header from '../Header/Header'
import DiagnosisHeader from './DiagnosisHeader';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuItem from 'material-ui/MenuItem';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

class Diagnosis2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            option1: '',
            option2: '',
            first: '',
            second: '',
            third: '',
            fourth: ''
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {
        const styles = {
            card: {
                maxWidth: 500,
                maxHeight: 1000
            }
        };
        return (

            <MuiThemeProvider>
                <div className="container-fluid">
                    <div className="row">
                        <Header headerName="Diagnosis"/>
                        <DiagnosisHeader/>
                        <div className="col-md-5">

                            <br/>
                            <Card style={styles.card}>
                                <CardContent>

                                    Diagnostics
                                    <br/>

                                    Asthma {''}
                                    <InputLabel
                                        htmlFor="option"
                                        style={{
                                        fontSize: '15px'
                                    }}></InputLabel>
                                    <Select
                                        style={{
                                        fontSize: '15px'
                                    }}
                                        value={this.state.option1}
                                        onChange={this.handleChange}
                                        input={< Input name = "option1" id = "option1" />}>

                                        <MenuItem value={1}>Major</MenuItem>
                                        <MenuItem value={2}>Minor</MenuItem>
                                        <MenuItem value={3}>Allergy</MenuItem>

                                    </Select>
                                    <br/>
                                    Bone Marrow cancer {''}
                                    <InputLabel
                                        htmlFor="option"
                                        style={{
                                        fontSize: '15px'
                                    }}></InputLabel>
                                    <Select
                                        style={{
                                        fontSize: '15px'
                                    }}
                                        value={this.state.option2}
                                        onChange={this.handleChange}
                                        input={< Input name = "option2" id = "option2" />}>

                                        <MenuItem value={1}>Major</MenuItem>
                                        <MenuItem value={2}>Minor</MenuItem>
                                        <MenuItem value={3}>Allergy</MenuItem>

                                    </Select>
                                    <Typography></Typography>
                                </CardContent>

                            </Card>

                            <br/>
                            <Card style={styles.card}>
                                <CardContent>

                                    Prescriptions

                                    <br/>
                                    When {''}
                                    <InputLabel
                                        htmlFor="option"
                                        style={{
                                        fontSize: '15px'
                                    }}></InputLabel>
                                    <Select
                                        style={{
                                        fontSize: '15px'
                                    }}
                                        value={this.state.first}
                                        onChange={this.handleChange}
                                        input={< Input name = "first" id = "first" />}>
                                        <MenuItem value="">
                                            <em>None</em>

                                        </MenuItem>
                                        <MenuItem value={1}>Before Food</MenuItem>
                                        <MenuItem value={2}>After Food</MenuItem>

                                    </Select>
                                    {''}
                                    <Select
                                        style={{
                                        fontSize: '15px'
                                    }}
                                        value={this.state.second}
                                        onChange={this.handleChange}
                                        input={< Input name = "second" id = "second" />}>
                                        <MenuItem value="">
                                            <em>None</em>

                                        </MenuItem>
                                        <MenuItem value={1}>Before Food</MenuItem>
                                        <MenuItem value={2}>After Food</MenuItem>

                                    </Select>
                                    <br/>
                                    Timings {''}
                                    <Select
                                        style={{
                                        fontSize: '15px'
                                    }}
                                        value={this.state.third}
                                        onChange={this.handleChange}
                                        input={< Input name = "third" id = "third" />}>
                                        <MenuItem value="">
                                            <em>None</em>

                                        </MenuItem>
                                        <MenuItem value={1}>Morning</MenuItem>
                                        <MenuItem value={2}>Evening</MenuItem>
                                        <MenuItem value={3}>Night</MenuItem>

                                    </Select>
                                    {''}
                                    <Select
                                        style={{
                                        fontSize: '15px'
                                    }}
                                        value={this.state.fourth}
                                        onChange={this.handleChange}
                                        input={< Input name = "fourth" id = "fourth" />}>
                                        <MenuItem value="">
                                            <em>None</em>

                                        </MenuItem>
                                        <MenuItem value={1}>Morning</MenuItem>
                                        <MenuItem value={2}>Evening</MenuItem>
                                        <MenuItem value={3}>Night</MenuItem>

                                    </Select>
                                    <Select
                                        style={{
                                        fontSize: '15px'
                                    }}
                                        value={this.state.fifth}
                                        onChange={this.handleChange}
                                        input={< Input name = "fifth" id = "fifth" />}>
                                        <MenuItem value="">
                                            <em>None</em>

                                        </MenuItem>
                                        <MenuItem value={1}>Morning</MenuItem>
                                        <MenuItem value={2}>Evening</MenuItem>
                                        <MenuItem value={3}>Night</MenuItem>

                                    </Select>

                                </CardContent>

                            </Card>

                        </div>
                    </div>

                </div>
            </MuiThemeProvider>

        );
    }
}

export default Diagnosis2;
