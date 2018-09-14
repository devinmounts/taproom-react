import React from 'react';
import KegInfo from './KegInfo';
import PropTypes from 'prop-types';

function KegList(props){
  let kegListDiv = {
    textAlign: 'center',
    height: '100%'
  };

  let kegListHeader = {
    marginTop: '0',
    paddingTop: '30px'
  };
  return(
    <div style={kegListDiv}>
      <h1 style={kegListHeader}>Kegs on Tap</h1>
      {Object.keys(props.kegList).map(function(kegId)
        {
          let keg = props.kegList[kegId];
          return <KegInfo
          name = {keg.name}
          brewer = {keg.brewer}
          description = {keg.description}
          price = {keg.price}
          abv = {keg.abv}
          remaining = {keg.remaining}
          key = {keg.id}
          kegId = {keg.id}
          currentRouterPath={props.currentRouterPath}
          onChangeSelectedKeg={props.onChangeSelectedKeg} />;
      })}
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onChangeSelectedKeg: PropTypes.func
};

export default KegList;
