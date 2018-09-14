import React from 'react';
import NewKegForm from './NewKegForm';
import AuthConfirmation from './AuthConfirmation';
import PropTypes from 'prop-types';
import Nav from './Nav';

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
        currentVisibleContent = <NewKegForm onNewKegCreation={this.props.onNewKegCreation}/>
      }
      else {
        currentVisibleContent = <AuthConfirmation onAuthConfirmation={this.handleAuthConfirmation}/>
      }
    return(
      <div>
        <Nav />
        {currentVisibleContent}
      </div>
    );
  }
}

NewKegControl.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegControl;
