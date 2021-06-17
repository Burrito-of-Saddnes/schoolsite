/* eslint-disable @typescript-eslint/no-useless-constructor */
import React, { Component } from 'react';
import 'scss/Routing.scss';
import Copyrights from 'UI/Copyrights'
import Routing from 'utils/Routing';

import 'scss/SideBar.scss';

export default class SideBar extends Component{
render(){
    return(
      <div className="SideBar">
        <Routing/>
        <div className="SideBar__copyrights">
          <Copyrights/>
        </div>
      </div>
    );
  }
}