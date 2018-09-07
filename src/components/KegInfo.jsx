import React from 'react';
import PropTypes from 'prop-types';

function KegInfo(keg) {

  let divStyle = {
      border: '3px solid grey',
      width: '25%',
      display: 'inline-block',
      margin: '1.5%',
      padding: '10px',
      verticalAlign: 'top',
      minHeight: '200px',
      WebkitBoxShadow: '0px 0px 33px 1px rgba(0,0,0,0.74)',
      MozBoxShadow: '0px 0px 33px 1px rgba(0,0,0,0.74)',
      boxShadow: '0px 0px 33px 1px rgba(0,0,0,0.74)',
      backgroundColor: '#76b35d'
  };

  return(
      <div style={divStyle}>
          <h3>{keg.name}</h3>
          <h5>{keg.brand}</h5>
          <h5>{keg.price}</h5>
          <h5>{keg.abv}</h5>
      </div>
  );
}

KegInfo.propTypes = {
    name: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.string,
    abv: PropTypes.string
};

export default KegInfo;
