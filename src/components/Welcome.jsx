import React from 'react';

function Welcome(){
  let welcomeStyle = {
      fontSize: '150px',
      textAlign: 'center',
      marginTop: '0',
      position: 'absolute',
      top: '40%',
      margin: '0 auto',
      width: '100%'
  };
  let welcomeDivStyle = {
      height: '100%',
      backgroundImage: 'url(\'https://images.pexels.com/photos/33686/beer-barrel-keg-cask-oak.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\')',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed'
  };
  return(
    <div style={welcomeDivStyle}>
        <h1 style={welcomeStyle}>Welcome Works</h1>
    </div>
  );
}

export default Welcome;
