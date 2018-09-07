import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Welcome from './Welcome';
import KegList from './KegList';
import NewKegControl from './NewKegControl';

function App(){

    return (
        <div>
            <Nav/>
            <Switch>
              <Route exact path='/' component={Welcome} />
              <Route path='/keglist' component={KegList} />
              <Route path='/admin' component={NewKegControl} />
            </Switch>
        </div>
    );
}

export default App;
