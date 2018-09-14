import React from 'react';
import PropTypes from 'prop-types';
import KegList from './KegList';
import KegDetail from './KegDetail';


function Admin(props){

  return(
    <div>Admin Works</div>
  );
}

Admin.propTypes = {
  kegList = PropTypes.string,
  onNewKegCreation = PropTypes.func,
  onChangeSelectedKeg = PropTypes.func,
  currentRouterPath = PropTypes.string,
  selectedKeg = PropTypes.object,

}
export default Admin;
