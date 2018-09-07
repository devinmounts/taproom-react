import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Welcome from './Welcome';
import KegList from './KegList';

function App(){

    return (
        <div>
            <Nav/>
            <Switch>
              <Route exact path='/' component={Welcome} />
              <Route path='/keglist' component={KegList} />
            </Switch>
        </div>
    );
}

export default App;
