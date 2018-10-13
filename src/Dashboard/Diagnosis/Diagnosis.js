import React, {Component} from 'react';
import Header from '../Header/Header';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import DiagnosisHeader from './DiagnosisHeader';
import TextField from 'material-ui/TextField';

const styles = {
    card: {
        maxWidth: 300
    },
    media: {
        height: 240,
        width: 240

    }
};

class Diagnosis extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: false,
            Heart: false,
            Blood: false,
            Cholestrol: false,
            Pressure: false,
            Glucose: false,
            temperature: '',
            HeartRate: '',
            BloodType: '',
            BodyCholestrol: '',
            BloodPressure: '',
            BloodGlucose: ''
        }

    }

    edit = (value) => {
        switch (value) {
            case 'temp':
                this.setState({
                    temp: !this.state.temp
                });
                break;

            case 'Heart':
                this.setState({
                    Heart: !this.state.Heart
                });
                break;

            case 'Blood':
                this.setState({
                    Blood: !this.state.Blood
                });
                break;

            case 'Cholestrol':
                this.setState({
                    Cholestrol: !this.state.Cholestrol
                });
                break;
            case 'Glucose':
                this.setState({
                    Glucose: !this.state.Glucose
                });
                break;
            case 'Pressure':
                this.setState({
                    Pressure: !this.state.Pressure
                })
        }

    }

    save = (value) => {
        switch (value) {
            case 'temp':
                this.setState({temp: false});
                break;

            case 'Heart':
                this.setState({Heart: false});
                break;

            case 'Blood':
                this.setState({Blood: false});
                break;

            case 'Cholestrol':
                this.setState({Cholestrol: false});
                break;
            case 'Glucose':
                this.setState({Glucose: false});
                break;
            case 'Pressure':
                this.setState({Pressure: false});
        }
    }

    handleChange = (event) => {
        this.setState({temperature: event.target.value})
    }

    render() {

        return (
            <MuiThemeProvider>

                <div className="container-fluid">

                    <div className="row">
                        <Header headerName="Patient Diagnosis"/>
                        <DiagnosisHeader/>
                        <br/>
                        <div className="col-md-2">
                            <Card style={styles.card}>
                                <CardActionArea>
                                    {this.state.temp == false
                                        ? <CardMedia
                                                style={styles.media}
                                                image="https://cdn3.iconfinder.com/data/icons/medical-8/512/temperature-512.png"
                                                title="Temperature"/>
                                        : null}
                                    <label>Temperature = {this.state.temperature}°C</label>
                                    <CardContent>
                                        <Typography gutterBottom variant="headline" component="h2">
                                            Temperature
                                        </Typography>
                                        <Typography component="p">
                                            Temperature of the patient
                                        </Typography>
                                    </CardContent>
                                    {this.state.temp == true
                                        ? <TextField floatingLabelText="enter temeprature" onChange={this.handleChange}/>
                                        : null}

                                </CardActionArea>
                                <CardActions>
                                    <RaisedButton label="Edit" secondary={true} onClick={() => this.edit('temp')}/>
                                    <RaisedButton label="Save" secondary={true} onClick={() => this.save('temp')}/>
                                </CardActions>
                            </Card>

                        </div>

                        <div className="col-md-2">
                            <Card style={styles.card}>
                                <CardActionArea>
                                    {this.state.Heart == false
                                        ? <CardMedia style={styles.media} image=" https://static1.squarespace.com/static/5424c8c9e4b0b6a5866722fa/t/5b167b9f352f539abbd0c4d4/1528200100354/heart-rate.jpg" title="Heart Rate"/>
                                        : null}
                                    <label>Heart Rate =
                                    </label>
                                    <CardContent>
                                        <Typography gutterBottom variant="headline" component="h2">
                                            Heart Rate
                                        </Typography>
                                        <Typography component="p">
                                            Heart Rate of the patient
                                        </Typography>
                                    </CardContent>
                                    {this.state.Heart == true
                                        ? <TextField floatingLabelText="enter Heart Rate"/>
                                        : null}

                                </CardActionArea>
                                <CardActions>
                                    <RaisedButton label="Edit" secondary={true} onClick={() => this.edit('Heart')}/>
                                    <RaisedButton label="Save" secondary={true} onClick={() => this.save('Heart')}/>
                                </CardActions>
                            </Card>

                        </div>

                        <div className="col-md-2">
                            <Card style={styles.card}>
                                <CardActionArea>
                                    {this.state.Blood == false
                                        ? <CardMedia style={styles.media} image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Blood_Compatibility.svg/230px-Blood_Compatibility.svg.png" title="Blood Type"/>
                                        : null}
                                    <label>Blood Type =
                                    </label>
                                    <CardContent>
                                        <Typography gutterBottom variant="headline" component="h2">
                                            Blood Type
                                        </Typography>
                                        <Typography component="p">
                                            Blood Type of the patient
                                        </Typography>
                                    </CardContent>
                                    {this.state.Blood == true
                                        ? <TextField floatingLabelText="enter Blood Type"/>
                                        : null}
                                </CardActionArea>
                                <CardActions>
                                    <RaisedButton label="Edit" secondary={true} onClick={() => this.edit('Blood')}/>
                                    <RaisedButton label="Save" secondary={true} onClick={() => this.save('Blood')}/>

                                </CardActions>
                            </Card>
                        </div>
                        <div className="col-md-2">

                            <Card style={styles.card}>
                                <CardActionArea>
                                    {this.state.Cholestrol == false
                                        ? <CardMedia style={styles.media} image="https://images.agoramedia.com/everydayhealth/gcms/How-Does-Stress-Effect-Cholesterol-722x406.jpg" title="Cholestrol"/>
                                        : null}
                                    <label>Cholestrol =
                                    </label>
                                    <CardContent>
                                        <Typography gutterBottom variant="headline" component="h2">
                                            Cholestrol
                                        </Typography>
                                        <Typography component="p">
                                            Cholestrol of the patient
                                        </Typography>
                                    </CardContent>
                                    {this.state.Cholestrol == true
                                        ? <TextField floatingLabelText="enter Cholestrol"/>
                                        : null}
                                </CardActionArea>
                                <CardActions>
                                    <RaisedButton
                                        label="Edit"
                                        secondary={true}
                                        onClick={() => this.edit('Cholestrol')}/>
                                    <RaisedButton
                                        label="Save"
                                        secondary={true}
                                        onClick={() => this.save('Cholestrol')}/>
                                </CardActions>
                            </Card>

                        </div>

                        <div className="col-md-2">
                            <Card style={styles.card}>
                                <CardActionArea>
                                    {this.state.Pressure == false
                                        ? <CardMedia style={styles.media} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9pS8MugAd7zvEAGVPBuBrBkXoWoKQzcqyPPnTyh8VOBcLZMAV7Q" title="Hear Rate"/>
                                        : null}
                                    <label>Blood Pressure =
                                    </label>
                                    <CardContent>
                                        <Typography gutterBottom variant="headline" component="h2">
                                            Blood Pressure
                                        </Typography>
                                        <Typography component="p">
                                            Blood Pressure of the patient
                                        </Typography>
                                    </CardContent>
                                    {this.state.Pressure == true
                                        ? <TextField floatingLabelText="enter Blood Pressure"/>
                                        : null}

                                </CardActionArea>
                                <CardActions>
                                    <RaisedButton
                                        label="Edit"
                                        secondary={true}
                                        onClick={() => this.edit('Pressure')}/>
                                    <RaisedButton
                                        label="Save"
                                        secondary={true}
                                        onClick={() => this.save('Pressure')}/>

                                </CardActions>
                            </Card>

                        </div>

                        <div className="col-md-2">
                            <Card style={styles.card}>
                                <CardActionArea>
                                    {this.state.Glucose == false
                                        ? <CardMedia style={styles.media} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgGpfvEp5AYd4IRDxX_JLSCJRzhCTszMozZK-vsmI_xSrvleeSdQ" title="Blood Type"/>
                                        : null}
                                    <label>Blood Glucose =
                                    </label>
                                    <CardContent>
                                        <Typography gutterBottom variant="headline" component="h2">
                                            Blood Glucose
                                        </Typography>
                                        <Typography component="p">
                                            Blood Glucose of the patient
                                        </Typography>
                                    </CardContent>
                                    {this.state.Glucose == true
                                        ? <TextField floatingLabelText="enter Blood Glucose"/>
                                        : null}
                                </CardActionArea>
                                <CardActions>
                                    <RaisedButton
                                        label="Edit"
                                        secondary={true}
                                        onClick={() => this.edit('Glucose')}/>
                                    <RaisedButton
                                        label="Save"
                                        secondary={true}
                                        onClick={() => this.save('Glucose')}/>

                                </CardActions>
                            </Card>

                        </div>
                    </div>

                </div>
            </MuiThemeProvider>
        )
    }

}

export default Diagnosis;