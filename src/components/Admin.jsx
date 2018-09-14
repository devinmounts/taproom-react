import React from 'react';
import PropTypes from 'prop-types';
import KegList from './KegList';
import KegDetail from './KegDetail';


function Admin(props){
  let optionalSelectedKegContent = null;
  if(props.selectedKeg !== null){
    optionalSelectedKegContent = <KegDetail selectedKeg ={props.selectedKeg} />
  }

  let containerStyle = {
    maxWidth: '1200px',
    margin: '2rem auto'
  }

  return(
    <div style={containerStyle}>
      <h2>Admin</h2>
      <KegList
        currentRouterPath={props.currentRouterPath}
        kegList={props.kegList}
        onNewKegCreation={props.onNewKegCreation}
        onChangeSelectedKeg={props.onChangeSelectedKeg}
        selectedKeg={props.selectedKeg}
    </div>
  );
}

Admin.propTypes = {
  kegList = PropTypes.array,
  onNewKegCreation = PropTypes.func,
  onChangeSelectedKeg = PropTypes.func,
  currentRouterPath = PropTypes.string.isRequired
  selectedKeg = PropTypes.object,

}
export default Admin;
