import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Welcome from './Welcome';
import KegList from './KegList';
import NewKegControl from './NewKegControl';
import Error404 from './Error404';

function App(){
    return (
        <div>
            <Nav/>
            <Switch>
              <Route exact path='/' component={Welcome} />
              <Route path='/keglist' component={KegList} />
              <Route path='/admin' component={NewKegControl} />
              <Route component={Error404} />
            </Switch>
        </div>
    );
}

export default App;
