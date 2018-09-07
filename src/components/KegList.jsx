import React from 'react';
import KegInfo from './KegInfo';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function KegList(props){
  let kegListDiv = {
    paddingTop: '105px',
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
      {props.kegList.map((keg, index) =>
        <KegInfo
          name = {keg.name}
          brewer = {keg.brewer}
          description = {keg.description}
          price = {keg.price}
          abv = {keg.abv}
          remaining = {keg.remaining}
          key = {index} />
      )}
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array
};

export default KegList;
