import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationQuestions(props){
  let confirmationDiv = {
    paddingTop: '105px',
    textAlign: 'center',
    height: '100%'
  };
  return (
    <div style={confirmationDiv}>
      <p>Are you authorized to submit this information?</p>
      <button onClick={props.onAuthConfirmation}>Yes</button>
    </div>
  );
}

ConfirmationQuestions.propTypes = {
  onAuthConfirmation: PropTypes.func
};

export default ConfirmationQuestions;
