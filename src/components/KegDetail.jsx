import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props){

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
      <h2>Keg Details</h2>
      <h1>{props.selectedKeg.name} - {props.selectedKeg.brewer}</h1>
      <h2>{props.selectedKeg.details}</h2>
      <h4><em>{props.selectedKeg.remaining}</em></h4>
      <hr/>

    </div>
  );
}

KegDetail.propTypes = {
  selectedKeg: PropTypes.object
}
export default KegDetail;
