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

const styles = {
    card: {
        maxWidth: 345
    },
    media: {
        height: 140
    }
};

class Diagnosis extends Component {
    constructor(props) {
        super(props);
        this.state = {}
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
                                    <CardMedia style={styles.media} image="" title="Temperature"/>
                                    <CardContent>
                                        <Typography gutterBottom variant="headline" component="h2">
                                            Temperature
                                        </Typography>
                                        <Typography component="p">
                                            Temperature of the patient
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <RaisedButton label="Edit" secondary={true} onClick={this.edit}/>
                                </CardActions>
                            </Card>

                        </div>

                        <div className="col-md-2">
                            <Card style={styles.card}>
                                <CardActionArea>
                                    <CardMedia style={styles.media} image="" title="Heart Rate"/>
                                    <CardContent>
                                        <Typography gutterBottom variant="headline" component="h2">
                                            Heart Rate
                                        </Typography>
                                        <Typography component="p">
                                            Heart Rate of the patient
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <RaisedButton label="Edit" secondary={true} onClick={this.edit}/>

                                </CardActions>
                            </Card>

                        </div>

                        <div className="col-md-2">
                            <Card style={styles.card}>
                                <CardActionArea>
                                    <CardMedia style={styles.media} image="" title="Blood Type"/>
                                    <CardContent>
                                        <Typography gutterBottom variant="headline" component="h2">
                                            Blood Type
                                        </Typography>
                                        <Typography component="p">
                                            Blood Type of the patient
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <RaisedButton label="Edit" secondary={true} onClick={this.edit}/>

                                </CardActions>
                            </Card>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-2">
                            <Card style={styles.card}>
                                <CardActionArea>
                                    <CardMedia style={styles.media} image="" title="Cholestrol"/>
                                    <CardContent>
                                        <Typography gutterBottom variant="headline" component="h2">
                                            Cholestrol
                                        </Typography>
                                        <Typography component="p">
                                            Cholestrol of the patient
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <RaisedButton label="Edit" secondary={true} onClick={this.edit}/>
                                </CardActions>
                            </Card>

                        </div>

                        <div className="col-md-2">
                            <Card style={styles.card}>
                                <CardActionArea>
                                    <CardMedia style={styles.media} image="" title="Hear Rate"/>
                                    <CardContent>
                                        <Typography gutterBottom variant="headline" component="h2">
                                            Blood Pressure
                                        </Typography>
                                        <Typography component="p">
                                            Blood Pressure of the patient
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <RaisedButton label="Edit" secondary={true} onClick={this.edit}/>

                                </CardActions>
                            </Card>

                        </div>

                        <div className="col-md-2">
                            <Card style={styles.card}>
                                <CardActionArea>
                                    <CardMedia style={styles.media} image="" title="Blood Type"/>
                                    <CardContent>
                                        <Typography gutterBottom variant="headline" component="h2">
                                            Blood Glucose
                                        </Typography>
                                        <Typography component="p">
                                            Blood Glucose of the patient
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <RaisedButton label="Edit" secondary={true} onClick={this.edit}/>

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