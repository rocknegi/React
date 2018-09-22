import React, {Component} from 'react';
import Header from '../Header/Header'
import DiagnosisHeader from './DiagnosisHeader';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
class PastVisits extends Component {

    render() {
        const styles = {
            card: {
                minWidth: 275
            },
            title: {
                marginBottom: 16,
                fontSize: 20
            },
            pos: {
                marginBottom: 12
            }
        };
        return (
            <div>
                <Header headerName="PastVisits"/>
                <DiagnosisHeader/>
                <br/>
                <div className="contianer">
                    <div className="row">
                        <div className="col-md-3">
                            <Card className={styles.card}>
                                <CardContent>
                                    <Typography style={styles.title} color="textSecondary">
                                        Allergies
                                    </Typography>
                                    <Typography variant="headline" component="h2">
                                        -food
                                    </Typography>
                                    <Typography style={styles.pos} color="textSecondary">
                                        peanuts
                                    </Typography>
                                    <Typography component="p">
                                        Severe Respiratory
                                        <br/> {'"Date:28/12/1996"'}
                                    </Typography>
                                </CardContent>

                            </Card>
                            <br/>

                        </div>

                        <div className="col-md-3">
                            <Card className={styles.card}>
                                <CardContent>
                                    <Typography style={styles.title} color="textSecondary">
                                        Major Diagnostics
                                    </Typography>
                                    <Typography variant="headline" component="h2">
                                        Asthma
                                    </Typography>
                                    <Typography style={styles.pos} color="textSecondary">
                                        Severe
                                    </Typography>
                                    <Typography component="p">
                                        well meaning and kindly.
                                        <br/> {'"Date:28/12/1996"'}
                                    </Typography>
                                </CardContent>

                            </Card>
                        </div>
                        <div className="col-md-3">
                            <Card className={styles.card}>
                                <CardContent>
                                    <Typography style={styles.title} color="textSecondary">
                                        Surgical History
                                    </Typography>
                                    <Typography variant="headline" component="h2">
                                        Food
                                    </Typography>
                                    <Typography style={styles.pos} color="textSecondary">
                                        Peanuts
                                    </Typography>
                                    <Typography component="p">
                                        Severe
                                        <br/> {'"Date:28/12/1996"'}
                                    </Typography>
                                </CardContent>

                            </Card>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <Card className={styles.card}>
                                <CardContent>
                                    <Typography style={styles.title} color="textSecondary">
                                        Minor diagnostics
                                    </Typography>
                                    <Typography variant="headline" component="h2">
                                        Leukemia
                                    </Typography>
                                    <Typography style={styles.pos} color="textSecondary">
                                        Severe
                                    </Typography>
                                    <Typography component="p">
                                        Shoulder calcination
                                        <br/> {'"Date:28/12/1996"'}
                                    </Typography>
                                </CardContent>

                            </Card>
                            <br/>

                        </div>

                        <div className="col-md-3">
                            <Card className={styles.card}>
                                <CardContent>
                                    <Typography style={styles.title} color="textSecondary">
                                        Family medical history
                                    </Typography>
                                    <Typography variant="headline" component="h2">
                                        GrandFather
                                    </Typography>
                                    <Typography style={styles.pos} color="textSecondary">
                                        Asthma
                                    </Typography>
                                    <Typography component="p">
                                        High BP
                                        <br/> {'"Date:28/12/1996"'}
                                    </Typography>
                                </CardContent>

                            </Card>
                        </div>
                        <div className="col-md-3">
                            <Card className={styles.card}>
                                <CardContent>
                                    <Typography style={styles.title} color="textSecondary">
                                        Medical History
                                    </Typography>
                                    <Typography variant="headline" component="h2">
                                        Fodd
                                    </Typography>
                                    <Typography style={styles.pos} color="textSecondary">
                                        Peanut
                                    </Typography>
                                    <Typography component="p">
                                        Severe
                                        <br/> {'"Date:28/12/1996"'}
                                    </Typography>
                                </CardContent>

                            </Card>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default PastVisits;
