import React from 'react';
import NewKegForm from './NewKegForm';
import AuthConfirmation from './AuthConfirmation';

class NewKegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
    };
    this.handleAuthConfirmation = this.handleAuthConfirmation.bind(this);
  }

  render(){
    let currentVisibleContent = {
      if (this.state.formVisibleOnPage){
        currentVisibleContent = <NewKegForm />
      }
      else {
        currentVisibleContent 
      }
    }
  }
}
