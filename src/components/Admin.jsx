import React from 'react';
import PropTypes from 'prop-types';
import KegList from './KegList';
import KegDetail from './KegDetail';
import { Link } from 'react-router-dom';


function Admin(props){
  console.log(props);
  console.log(props.kegList);
  console.log(props.selectedKeg);
  console.log(props.kegList[1]);


  let optionalSelectedKegContent = null;
  if(props.selectedKeg !== null){
    optionalSelectedKegContent = <KegDetail
      selectedKeg ={props.kegList[1]}/>;
  }

  let containerStyle = {
    maxWidth: '1200px',
    margin: '5rem auto'
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
  selectedKeg: PropTypes.object
}
export default Admin;
