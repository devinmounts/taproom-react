import React from 'react';
import { Link } from 'react-router-dom';
import hops from '../assets/images/hops.png';

function Nav() {
  let navStyle = {
      position: 'absolute',
      top: '0',
      width: '100%',
      height: '100px'
  };
  let imageStyle = {
      width: '70px'
  };
  let imageDiv ={
      display: 'inline-block',
      verticalAlign: 'top',
      margin: '5px',
      padding: '5px',
  };
  let divStyle = {
      display: 'inline-block',
      verticalAlign: 'top',
      margin: '5px',
      padding: '5px',
      float: 'right'
  };
  let linkEle = {
    color: 'white',
    fontSize: '20px',
    fontFamily: 'sans-serif',
    fontStyle: 'oblique',
    color: '#b3bd90'
  }

  return(
    <div style={navStyle}>
        <div style={imageDiv}>
            <Link to='/'><img style={imageStyle} src={hops} /></Link>
        </div>
        <div style={divStyle}>
            <Link style={linkEle} to='/keglist'><h4>Keg List</h4></Link>
        </div>
        <div style={divStyle}>
            <Link style={linkEle} to='/admin'><h4>Admin</h4></Link>
        </div>
    </div>
  );
}

export default Nav;
