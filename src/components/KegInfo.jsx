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
          <h5>Brewer: {keg.brewer}</h5>
          <h5>{keg.description}</h5>
          <h5>${keg.price}</h5>
          <h5>{keg.abv} ABV</h5>
          <h5>Pints Remaining: {keg.remaining}</h5>
      </div>
  );
}

KegInfo.propTypes = {
    name: PropTypes.string,
    brewer: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    abv: PropTypes.string,
    remaining: PropTypes.string
};

export default KegInfo;
