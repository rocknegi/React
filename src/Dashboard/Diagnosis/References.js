import React, {Component} from 'react';
import Header from '../Header/Header'
import DiagnosisHeader from './DiagnosisHeader';

class References extends Component {

    render() {
        return (
            <div>
                <Header headerName="References"/>
                <DiagnosisHeader />
                hello from References
            </div>
        );
    }
}

export default References;
