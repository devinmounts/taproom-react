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

  handleAuthConfirmation() {
    this.setState({formVisibleOnPage: true});
    console.log('formVisibleOnPage is currently set to:' + this.state.formVisibleOnPage)
  }

  render(){
    let currentVisibleContent = null;
      if (this.state.formVisibleOnPage){
        currentVisibleContent = <NewKegForm />
      }
      else {
        currentVisibleContent = <AuthConfirmation />
      }
    return(
      <div>
        {currentVisibleContent}
      </div>

    );

  }
}

export default NewKegControl;
