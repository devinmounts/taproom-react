import React from 'react';
import PropTypes from 'prop-types';
import KegList from './KegList';
import KegDetail from './KegDetail';
import { Link } from 'react-router-dom';


function Admin(props){
  let containerStyle = {
    maxWidth: '1200px',
    margin: '5rem auto'
  };

  let optionalSelectedKegContent = null;
  if(props.selectedKeg !== null){
    optionalSelectedKegContent = <KegDetail
      selectedKeg ={props.kegList[props.selectedKeg.kegId]}
      onSellPint={props.onSellPint}
      onSellGrowler={props.onSellGrowler}
      onCloseModal={props.onCloseModal}
    />;
  }

  return(
    <div style={containerStyle}>
      <h2>Admin</h2>
      <Link to='newkeg'><button>Tap New Keg</button></Link>
      {optionalSelectedKegContent}
      <KegList
        currentRouterPath={props.currentRouterPath}
        kegList={props.kegList}
        onNewKegCreation={props.onNewKegCreation}
        onChangeSelectedKeg={props.onChangeSelectedKeg}
        selectedKeg={props.selectedKeg} />
    </div>
  );
}

Admin.propTypes = {
  kegList: PropTypes.object,
  onNewKegCreation: PropTypes.func,
  onChangeSelectedKeg: PropTypes.func,
  currentRouterPath: PropTypes.string.isRequired,
  selectedKeg: PropTypes.object,
  onSellPint: PropTypes.func,
  onSellGrowler: PropTypes.func,
  onCloseModal: PropTypes.func
};
export default Admin;
