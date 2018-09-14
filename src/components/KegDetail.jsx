import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props){
  let divStyle = {
    border: '3px solid grey',
    width: '25%',
    margin: '6rem 23rem',
    padding: '10px',
    verticalAlign: 'top',
    minHeight: '200px',
    WebkitBoxShadow: '0px 0px 33px 1px rgba(0,0,0,0.74)',
    MozBoxShadow: '0px 0px 33px 1px rgba(0,0,0,0.74)',
    boxShadow: '0px 0px 33px 1px rgba(0,0,0,0.74)',
    backgroundColor: '#76b35d',
    position: 'fixed',
    textAlign: 'left'
  };

  let divAlertStyle = {
    border: '3px solid grey',
    width: '25%',
    margin: '6rem 23rem',
    padding: '10px',
    verticalAlign: 'top',
    minHeight: '200px',
    WebkitBoxShadow: '0px 0px 33px 1px rgba(0,0,0,0.74)',
    MozBoxShadow: '0px 0px 33px 1px rgba(0,0,0,0.74)',
    boxShadow: '0px 0px 33px 1px rgba(0,0,0,0.74)',
    backgroundColor: '#e39b3d',
    position: 'fixed',
    textAlign: 'left'
  };

  let divWarningStyle = {
    border: '3px solid grey',
    width: '25%',
    margin: '6rem 23rem',
    padding: '10px',
    verticalAlign: 'top',
    minHeight: '200px',
    WebkitBoxShadow: '0px 0px 33px 1px rgba(0,0,0,0.74)',
    MozBoxShadow: '0px 0px 33px 1px rgba(0,0,0,0.74)',
    boxShadow: '0px 0px 33px 1px rgba(0,0,0,0.74)',
    backgroundColor: '#e33d3d',
    position: 'fixed',
    textAlign: 'left'
  };

  let modalStyle = {
    position: 'absolute',
    zIndex: '1',
    minHeight: '1200px',
    minWidth: '1200px',
    backgroundColor: '#1a1e1a85',
    backgroundSize: 'cover',
    textAlign: 'center',
  }

  let button = {
    float: 'right'
  }



  function handleSellPint(){
    props.onSellPint(props.selectedKeg.id);
  }

  function handleSellGrowler(){
    props.onSellGrowler(props.selectedKeg.id);
  }

  function handleCloseModal(){
    props.onCloseModal()
  }

  if(props.selectedKeg.remaining < 11){
    return(
      <div style={modalStyle}>
        <div style={divWarningStyle}>
          <button className='buttonStyle' style={button} onClick={handleCloseModal} >Close</button>
          <h2>Keg Details</h2>
          <h1>{props.selectedKeg.name} - {props.selectedKeg.brewer}</h1>
          <h2>{props.selectedKeg.details}</h2>
          <h4><em>{props.selectedKeg.remaining}</em></h4>
          <hr/>
          <button className='buttonStyle' onClick={handleSellPint}>Sell Pint</button>
          <button className='buttonStyle' onClick={handleSellGrowler}>Sell Growler</button>
        </div>
        <style jsx>{`
          .buttonStyle {
              background: #601ac7;
              padding: 10px 17px;
              border-radius: 5px;
              margin-right: 10px;
              color: white;
              border: 1px solid #3f1084;
              font-weight: 700;
          }
          .buttonStyle:hover{
            background: #3e0e84;
            color:white;
          }
      `}</style>
      </div>

    );
  } else if (props.selectedKeg.remaining < 50 && props.selectedKeg.remaining > 10){
    return(
      <div style={modalStyle}>
        <div style={divAlertStyle}>
          <button className='buttonStyle' style={button} onClick={handleCloseModal} >Close</button>
          <h2>Keg Details</h2>
          <h1>{props.selectedKeg.name} - {props.selectedKeg.brewer}</h1>
          <h2>{props.selectedKeg.details}</h2>
          <h4><em>{props.selectedKeg.remaining}</em></h4>
          <hr/>
          <button className='buttonStyle' onClick={handleSellPint}>Sell Pint</button>
          <button className='buttonStyle' onClick={handleSellGrowler}>Sell Growler</button>
        </div>
        <style jsx>{`
          .buttonStyle {
              background: #601ac7;
              padding: 10px 17px;
              border-radius: 5px;
              margin-right: 10px;
              color: white;
              border: 1px solid #3f1084;
              font-weight: 700;
          }
          .buttonStyle:hover{
            background: #3e0e84;
            color:white;
          }
      `}</style>
      </div>
    );
  } else {
    return (
      <div style={modalStyle}>
        <div style={divStyle}>
          <button className='buttonStyle' style={button} onClick={handleCloseModal}>Close</button>
          <h2>Keg Details</h2>
          <h1>{props.selectedKeg.name} - {props.selectedKeg.brewer}</h1>
          <h2>{props.selectedKeg.details}</h2>
          <h4><em>{props.selectedKeg.remaining}</em></h4>
          <hr/>
          <button className='buttonStyle' onClick={handleSellPint}>Sell Pint</button>
          <button className='buttonStyle' onClick={handleSellGrowler}>Sell Growler</button>
        </div>
        <style jsx>{`
          .buttonStyle {
              background: #601ac7;
              padding: 10px 17px;
              border-radius: 5px;
              margin-right: 10px;
              color: white;
              border: 1px solid #3f1084;
              font-weight: 700;
          }
          .buttonStyle:hover{
            background: #3e0e84;
            color:white;
          }
      `}</style>
      </div>
    );
  }
}

KegDetail.propTypes = {
  selectedKeg: PropTypes.object,
  onSellPint: PropTypes.func,
  onSellGrowler: PropTypes.func,
  onCloseModal: PropTypes.func
};
export default KegDetail;
