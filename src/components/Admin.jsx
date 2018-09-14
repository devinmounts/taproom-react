import React from 'react';
import PropTypes from 'prop-types';
import KegList from './KegList';
import KegDetail from './KegDetail';
import { Link } from 'react-router-dom';


function Admin(props){
    console.log(props);
    console.log(props.kegList);
    console.log(props.selectedKeg);
    console.log(props.kegList[props.selectedKeg]);


    let optionalSelectedKegContent = null;
    if(props.selectedKeg !== null){
        optionalSelectedKegContent = <KegDetail
          selectedKeg ={props.kegList[props.selectedKeg]}
          onSellPint={props.onSellPint}
          onSellGrowler={props.onSellGrowler}
          />;
    }

    let containerStyle = {
        maxWidth: '1200px',
        margin: '5rem auto'
    };

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
    onSellGrowler: PropTypes.func
};
export default Admin;
