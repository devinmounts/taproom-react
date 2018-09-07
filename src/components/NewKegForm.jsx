import React from 'react';

function NewKegForm() {
  let _name = null;
  let _brewer = null;
  let _description = null;
  let _price = null;
  let _abv = null;
  let _remaining = null;

  let formDiv = {
    paddingTop: '125px',
    textAlign: 'center',
    height: '100%'
  };

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    console.log(_name.value);
    console.log(_brewer.value);
    console.log(_description.value);
    console.log(_price.value);
    console.log(_abv.value);
    console.log(_remaining.value);
    _name.value = '';
    _brewer.value = '';
    _description.value = '';
    _price.value = '';
    _abv.value = '';
    _remaining.value = '';

  }
  return(
    <div style={formDiv}>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Name'
          ref={(input) => {_name = input;}}/>
        <input
          type='text'
          id='brewer'
          placeholder='Brewer'
          ref={(input) => {_brewer = input;}}/>
        <input
          type='text'
          id='description'
          placeholder='Description'
          ref={(input) => {_description = input;}}/>
        <input
          type='text'
          id='price'
          placeholder='Price'
          ref={(input) => {_price = input;}}/>
        <input
          type='text'
          id='abv'
          placeholder='ABV'
          ref={(input) => {_abv = input;}}/>
        <input
          type='text'
          id='remaining'
          placeholder='Remaining Pints'
          ref={(input) => {_remaining = input;}}/>
        <br/>
        <button type='submit'>Tap New Keg</button>
      </form>
    </div>
  );
}

export default NewKegForm;