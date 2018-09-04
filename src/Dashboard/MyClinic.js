import React, {Component} from 'react';
import Header from './Header/Header'

class MyClinic extends Component {

    render() {
        return (
            <div>
                <Header headerName="My Clinic"/>
                hello from MyClinic
            </div>
        );
    }
}

export default MyClinic;
