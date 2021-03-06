import React from 'react';
import PropTypes from 'prop-types';

function NewKegForm(props) {
  let _name = null;
  let _brewer = null;
  let _description = null;
  let _price = null;
  let _abv = null;

  let formDiv = {
    paddingTop: '125px',
    textAlign: 'center',
    height: '100%'
  };

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: _name.value,
      brewer: _brewer.value,
      description: _description.value,
      price: _price.value,
      abv: _abv.value,
      id: '',
      remaining: 120});
    _name.value = '';
    _brewer.value = '';
    _description.value = '';
    _price.value = '';
    _abv.value = '';

  }
  return(
    <div style={formDiv}>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          id='name'
          value = 'Test'
          placeholder='Name'
          ref={(input) => {_name = input;}}/>
        <input
          type='text'
          id='brewer'
          value = 'Test'
          placeholder='Brewer'
          ref={(input) => {_brewer = input;}}/>
        <input
          type='text'
          id='description'
          value = 'Test'
          placeholder='Description'
          ref={(input) => {_description = input;}}/>
        <input
          type='text'
          id='price'
          value = 'Test'
          placeholder='Price'
          ref={(input) => {_price = input;}}/>
        <input
          type='text'
          id='abv'
          value = 'Test'
          placeholder='ABV'
          ref={(input) => {_abv = input;}}/>
        <br/>
        <button type='submit'>Tap New Keg</button>
      </form>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;
