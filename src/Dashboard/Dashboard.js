import React, {Component} from 'react';
import './Dashboard.css';
import Header from './Header/Header';
import Cost from './Graphs/Cost';
import Patinets from './Graphs/Patients';
import Pie from './Graphs/Pie';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "open": false,
            "show": null

        }
    }

    handleToggle = () => this.setState({
        open: !this.state.open
    });
    showBar = () => {
        this.setState({show: 'bar', open: false});
    }

    addPerson = () => {
        this
            .props
            .history
            .push("/addPerson");
    }

    render() {
        return (
            <div>
                <div className="container-fluid">

                    <div className="row">
                        <Header headerName="My Clinic"></Header>
                        <div className="fab" onClick={this.addPerson}>
                            +
                        </div>

                        <div className="col-md-4">
                            <Cost/>
                        </div>

                        <div className="col-md-4">
                            <Patinets/>

                        </div>
                        <div className="col-md-4">
                            <Pie/>

                        </div>

                    </div>

                </div>
            </div>

        );
    }
}

export default Dashboard;
