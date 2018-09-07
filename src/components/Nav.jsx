import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  let navStyle = {
      borderBottom: '2px lightgray solid',
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

  return(
    <div style={navStyle}>
        <div style={imageDiv}>
            <Link to='/'><img style={imageStyle} src="" /></Link>
        </div>
        <div style={divStyle}>
            <Link to='/schedule'><h4>Keg List</h4></Link>
        </div>
        <div style={divStyle}>
            <Link to='/admin'><h4>Admin</h4></Link>
        </div>
    </div>
  );
}

export default Nav;
