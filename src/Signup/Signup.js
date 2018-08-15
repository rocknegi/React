import React, { Component } from 'react';

class Signup extends Component {
    render(){
        return(
            <div className='wrapper' style={wrapit}>
                <Header/>
                <Footer/>
            </div>
        );
    }
}

const wrapit = {
    background:"red",
    display: 'grid',
    gridTemplateRows : '1fr 4fr',
    borderRadius: '40px',
};

const topstyle = {
    background:'white',
    justifySelf:'center',
    border:'2px solid black',
    gridRow:'1 2',
};

const bottom = {
    background:'white',
    alignContent:'center',
    border:'2px dashed black',
    gridRow:'2 3',
    display:'grid',
    gridTemplateColumns:'3fr 2fr',
};

class Header extends Component {
    render(){
        return(
            <div className ='header' style={topstyle}>
                <h1>Create an Account</h1>
            </div>
        );
    }
}


class Footer extends Component {
    render(){
        return(
            <div classname ='footer' style ={bottom}>
                <Left/>
                <Right/>
            </div>
        );
    }
}

class Left extends Component {
    render(){
        return(
            <div classname ='left' style ={lef}>
            <div >
                <label>Dr. <input type='text'/><input type='text'/><input type='text'/></label>
                </div>

                <div >
                <label>Registration no.<input type='text'/></label>
                </div>
            
                <div >
                <label>Phone number<input type='text'/></label>
                </div>

                <div >
                <label>Email <input type='email'/></label>
                </div>

                <div >
                <label>Address <input type='textarea'/></label>
                </div>

                <div style={{display:'inline'}}>
                <label>City <input type='text'/></label>
                <label>State: <input type='text'/></label>
                </div>

                <div >
                <label>PIN <input type='text'/></label>
                </div>
            </div>
        );
    }
}

class Right extends Component {
    render(){
        return(
            <div classname ='right' style ={rig}>
              <h1>some content</h1>
            </div>
        );
    }
}

const lef = {
 
};

const rig = {
 
};
export default Signup;
