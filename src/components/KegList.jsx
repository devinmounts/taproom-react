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
      {KEGLIST.map((keg, index) =>
        <KegInfo
          name = {keg.name}
          brand = {keg.brand}
          price = {keg.price}
          abv = {keg.abv}
          key = {index} />
      )}
    </div>
  );
}

const KEGLIST = [
  {
    name: 'GingerBrew',
    brand: 'BrewBrew',
    price: 7,
    abv: .5
  },
  {
    name: 'GingerBrew',
    brand: 'BrewBrew',
    price: 7,
    abv: .5
  },
  {
    name: 'GingerBrew',
    brand: 'BrewBrew',
    price: 7,
    abv: .5
  },
  {
    name: 'GingerBrew',
    brand: 'BrewBrew',
    price: 7,
    abv: .5
  }
]

export default KegList;
