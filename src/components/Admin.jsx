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
      <Link to='newkeg'><button className='buttonStyle'>Tap New Keg</button></Link>
      {optionalSelectedKegContent}
      <KegList
        currentRouterPath={props.currentRouterPath}
        kegList={props.kegList}
        onNewKegCreation={props.onNewKegCreation}
        onChangeSelectedKeg={props.onChangeSelectedKeg}
        selectedKeg={props.selectedKeg} />
      <style jsx>{`
        .buttonStyle {
            background: #601ac7;
            padding: 10px 17px;
            border-radius: 5px;
            margin-right: 10px;
            color: white;
            border: 1px solid #3f1084;
            font-weight: 700;
        }
        .buttonStyle:hover{
          background: #3e0e84;
          color:white;
        }
    `}</style>
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
