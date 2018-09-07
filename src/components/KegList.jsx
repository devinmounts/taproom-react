import React from 'react';
import KegInfo from './KegInfo';
import { Link } from 'react-router-dom';

function KegList(){
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
      {state.masterKegList.map((keg, index) =>
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

const state = {
  masterKegList: [
    {
      name: 'Ruby Zozzle',
      brewer: 'Hi-Wheel',
      description: 'Sparkling Wine & Grapefruit',
      abv: '6.8%',
      price: '7',
      remaining: '20'
    },
    {
      name: 'Tart N Juicy',
      brewer: 'Epic',
      description: 'Sour IPA',
      abv: '4.5%',
      price: '6',
      remaining: '60'
    },
    {
      name: 'Hamm\'s',
      brewer: 'Miller/Coors',
      description: 'American Lager',
      abv: '4.7%',
      price: '3',
      remaining: '65'
    },
    {
      name: 'Prismatic',
      brewer: 'Ninkasi',
      description: 'Juicy IPA',
      abv:  '5.9%',
      price: '6',
      remaining: '75'
    },
    {
      name: 'Juicy Haze',
      brewer: 'New Belgium',
      description: 'India Pale Ale',
      abv:  '7.5%',
      price: '6',
      remaining: '18'
    },
    {
      name: '8 Hop',
      brewer: 'New Belgium',
      description: 'Pale Ale',
      abv:  '5.5%',
      price: '6',
      remaining: '58'
    }
  ]
}


export default KegList;
