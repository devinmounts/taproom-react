import React from 'react';

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
      backgroundImage: 'url(\'https://images.pexels.com/photos/1267358/pexels-photo-1267358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\')',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed'
  };
  return(
    <div style={welcomeDivStyle}>
        <h1 style={welcomeStyle}>Hop House</h1>
    </div>
  );
}

export default Welcome;
