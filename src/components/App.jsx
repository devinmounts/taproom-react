import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Welcome from './Welcome';
import KegList from './KegList';
import NewKegControl from './NewKegControl';
import Error404 from './Error404';
import { Redirect } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state =  {
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
      ],
      selectedKeg: null
    };
     this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
     this.handleChangeSelectedKeg = this.handleChangeSelectedKeg.bind(this);
  }

  handleAddingNewKegToList(newKeg){
    let newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    this.setState({masterKegList: newMasterKegList});
  }

  handleChangeSelectedKeg(keg){
    this.setState({selectedKeg: keg});
  }

  render(){
    return (
        <div>
          <Nav/>
          <Switch>
            <Route exact path='/' component={Welcome} />
            <Route path='/keglist' render={()=><KegList kegList={this.state.masterKegList} />} />
            <Route path='/admin'
              render={(props)=><Admin
                onNewKegCreation={this.handleAddingNewKegToList}
                kegList={this.state.masterKegList}
                currentRouterPath={props.location.pathname}
                onChangeSelectedKeg={this.handleChangeSelectedKeg}
                selectedKeg={this.state.selectedKeg}
              />}
            />
            <Route component={Error404} />
          </Switch>
        </div>
    );
  }
}

export default App;
