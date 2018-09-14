import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Welcome from './Welcome';
import KegList from './KegList';
import NewKegControl from './NewKegControl';
import Error404 from './Error404';
import Admin from './Admin';
import { Redirect } from 'react-router-dom';
import { v4 } from 'uuid';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state =  {
            masterKegList: {
            '1':{
                  name: 'Ruby Zozzle',
                  brewer: 'Hi-Wheel',
                  description: 'Sparkling Wine & Grapefruit',
                  id: '1',
                  abv: '6.8%',
                  price: '7',
                  remaining: 20
                },
            '2':{
                  name: 'Tart N Juicy',
                  brewer: 'Epic',
                  description: 'Sour IPA',
                  id: '2',
                  abv: '4.5%',
                  price: '6',
                  remaining: 60
                },
            '3':{
                  name: 'Hamm\'s',
                  brewer: 'Miller/Coors',
                  description: 'American Lager',
                  abv: '4.7%',
                  id: '3',
                  price: '3',
                  remaining: 65
                },
            '4':{
                  name: 'Prismatic',
                  brewer: 'Ninkasi',
                  description: 'Juicy IPA',
                  id: '4',
                  abv:  '5.9%',
                  price: '6',
                  remaining: 75
                },
            '5':{
                  name: 'Juicy Haze',
                  brewer: 'New Belgium',
                  description: 'India Pale Ale',
                  id: '5',
                  abv:  '7.5%',
                  price: '6',
                  remaining: 18
                },
            '6':{
                  name: '8 Hop',
                  brewer: 'New Belgium',
                  description: 'Pale Ale',
                  id: '6',
                  abv:  '5.5%',
                  price: '6',
                  remaining: 58
                }
            },
            kegId: null
        };
        this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
        this.handleChangeSelectedKeg = this.handleChangeSelectedKeg.bind(this);
        this.handleSellPint = this.handleSellPint.bind(this);
        this.handleSellGrowler = this.handleSellGrowler.bind(this);
    }

    handleAddingNewKegToList(newKeg){
      let newKegId = v4();
      newKeg.id = newKegId;
      let newMasterKegList = Object.assign(
          {}, this.state.masterKegList,
          {[newKegId]: newKeg});
      this.setState({masterKegList: newMasterKegList});
    }

    handleChangeSelectedKeg(kegId){
        this.setState({kegId: kegId});
    }

    handleSellPint(kegId){
      let kegToSell = this.state.masterKegList[kegId];
      kegToSell.remaining --;
      console.log(kegToSell.remaining)
    }

    handleSellGrowler(kegId){
      let kegToSell = this.state.masterKegList[kegId];
      kegToSell.remaining -6;
    }

    render(){
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Welcome} />
                    <Route path='/keglist' render={()=><KegList kegList={this.state.masterKegList} />} />
                    <Route path='/newkeg' render={()=><NewKegControl onNewKegCreation={this.handleAddingNewKegToList} />} />
                    <Route path='/admin'
                      render={(props)=><Admin
                        onNewKegCreation={this.handleAddingNewKegToList}
                        kegList={this.state.masterKegList}
                        currentRouterPath={props.location.pathname}
                        onChangeSelectedKeg={this.handleChangeSelectedKeg}
                        selectedKeg={this.state.kegId}
                        onSellPint={this.handleSellPint}
                        onSellGrowler={this.handleSellGrowler}
                      />}
                    />
                    <Route component={Error404} />
                </Switch>
            </div>
        );
    }
}

export default App;
