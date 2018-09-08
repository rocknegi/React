import React, {Component} from 'react';
import Header from '../Header/Header'
import DiagnosisHeader from './DiagnosisHeader';

class Billing extends Component {

    render() {
        return (
            <div>
                <Header headerName="Billing"/>
                <DiagnosisHeader />
                hello from Billing
            </div>
        );
    }
}

export default Billing;
