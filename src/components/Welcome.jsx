import React from 'react';
import barrel from '../assets/images/barrel.jpg';
import Nav from './Nav';

function Welcome(){
    let welcomeStyle = {
        fontSize: '150px',
        textAlign: 'center',
        marginTop: '0',
        position: 'absolute',
        top: '60%',
        margin: '0 auto',
        width: '100%',
        color: '#b3bd90',
        fontStyle: 'oblique'
    };
    let welcomeDivStyle = {
        height: '100%',
        backgroundImage: 'url(' + barrel + ')',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
    };
    return(
        <div>
            <Nav />
            <div style={welcomeDivStyle}>
                <h1 style={welcomeStyle}>Hop House</h1>
            </div>
        </div>
    );
}

export default Welcome;
