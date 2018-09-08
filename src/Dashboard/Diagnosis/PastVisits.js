import React, {Component} from 'react';
import Header from '../Header/Header'
import DiagnosisHeader from './DiagnosisHeader';

class PastVisits extends Component {

    render() {
        return (
            <div>
                <Header headerName="PastVisits"/>
                <DiagnosisHeader />
                hello from PastVisits
            </div>
        );
    }
}

export default PastVisits;
