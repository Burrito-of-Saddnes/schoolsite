import React, { Component } from 'react';

import MoreDetailsButton from 'UI/buttons/MoreDetailsButton'

import 'scss/Home.scss';

export default class Home extends Component  {

  handleClick = () => {
    alert("MoreDetailsButton");
  }

  render() {
    return(
      <div className="Home">
        <div className="Home__ContentWrapper">
          <div className="Home__ContentWrapper_Content1">
            <div className="Home__ContentWrapper_Content1_text">
              some text inside block
            </div>
          </div>
          <div className="Home__ContentWrapper_Content2">
            <div className="Home__ContentWrapper_Content2_text">
              some text inside block
            </div>
            <MoreDetailsButton
              onClick={this.handleClick}
            />
          </div>
        </div>
      </div>
    )
  }
}