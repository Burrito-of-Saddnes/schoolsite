import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';

import Home from '../pages/Home';
import FieldSchool from '../pages/FieldSchool';
import Online from '../pages/Online';
import FulltimeClass from '../pages/FulltimeClass';
import Tournament from '../pages/Tournament';
import About from '../pages/About';

const Main = () => (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/FieldSchool' component={FieldSchool}/>
      <Route path='/Online' component={Online}/>
      <Route path='/FulltimeClass' component={FulltimeClass}/>
      <Route path='/Tournament' component={Tournament}/>
      <Route path='/About' component={About}/>
    </Switch>
)

export default Main;