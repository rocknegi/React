import React, {Component} from 'react';
import Header from '../Header/Header'
import DiagnosisHeader from './DiagnosisHeader';

class Complaints extends Component {

    render() {
        return (
            <div>
                <Header headerName="Complaints"/>
                <DiagnosisHeader />
                hello from Complaints
            </div>
        );
    }
}

export default Complaints;
