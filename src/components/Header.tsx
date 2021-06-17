import React, { Component } from 'react';

import MiniMenu from 'components/MiniMenu';
import LogoButton from 'UI/buttons/LogoButton';

import 'scss/Header.scss';

export default class Header extends Component  {
  render() {
    return(
        <div className="Header">
            
            <LogoButton/>

            <MiniMenu/>

            <div className="Header__phonewrapper">
                <div className="Header__phone">
                    8 800 755 35 35
                </div>
            </div>             
            
        </div>

    )
  }
}