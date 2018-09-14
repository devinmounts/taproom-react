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

  let divAlertStyle = {
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
    backgroundColor: '#e39b3d'
  };

  let divWarningStyle = {
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
    backgroundColor: '#e33d3d'
  };



  function handleSellPint(){
    props.onSellPint(props.selectedKeg.id);
  }

  function handleSellGrowler(){
    props.onSellGrowler(props.selectedKeg.id);
  }

  if(props.selectedKeg.remaining < 11){
    return(
      <div style={divWarningStyle}>
        <h2>Keg Details</h2>
        <h1>{props.selectedKeg.name} - {props.selectedKeg.brewer}</h1>
        <h2>{props.selectedKeg.details}</h2>
        <h4><em>{props.selectedKeg.remaining}</em></h4>
        <hr/>
        <button onClick={handleSellPint}>Sell Pint</button>
        <button onClick={handleSellGrowler}>Sell Growler</button>
      </div>
    );
  } else if (props.selectedKeg.remaining < 50 && props.selectedKeg.remaining > 10){
    return(
      <div style={divAlertStyle}>
        <h2>Keg Details</h2>
        <h1>{props.selectedKeg.name} - {props.selectedKeg.brewer}</h1>
        <h2>{props.selectedKeg.details}</h2>
        <h4><em>{props.selectedKeg.remaining}</em></h4>
        <hr/>
        <button onClick={handleSellPint}>Sell Pint</button>
        <button onClick={handleSellGrowler}>Sell Growler</button>
      </div>
    );
  } else {
    return (
      <div style={divStyle}>
        <h2>Keg Details</h2>
        <h1>{props.selectedKeg.name} - {props.selectedKeg.brewer}</h1>
        <h2>{props.selectedKeg.details}</h2>
        <h4><em>{props.selectedKeg.remaining}</em></h4>
        <hr/>
        <button onClick={handleSellPint}>Sell Pint</button>
        <button onClick={handleSellGrowler}>Sell Growler</button>
      </div>
    );
  }
}

KegDetail.propTypes = {
  selectedKeg: PropTypes.object,
  onSellPint: PropTypes.func,
  onSellGrowler: PropTypes.func
};
export default KegDetail;
