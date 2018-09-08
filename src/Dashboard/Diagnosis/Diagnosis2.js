import React, {Component} from 'react';
import Header from '../Header/Header'
import DiagnosisHeader from './DiagnosisHeader';


class Diagnosis2 extends Component {

    render() {
        return (
            <div>
                <Header headerName="Diagnosis"/>
                <DiagnosisHeader />
                hello from Diagnosis2
            </div>
        );
    }
}

export default Diagnosis2;
