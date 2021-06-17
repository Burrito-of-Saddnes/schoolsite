import React, { Component } from 'react';

import 'scss/MoreDetailsButton.scss';

interface MoreDetailsButtonProps {
  onClick?: () => any;
}

export default class MoreDetailsButton extends Component<MoreDetailsButtonProps, {}> {
  render() {
    const { onClick } = this.props
    return(
      <div className="MoreDetailsButton"
        onClick={e => {
          onClick && onClick()
        }}
      >
        <div className="MoreDetailsButton__Text">
          Подробнее
        </div>
        <div className="MoreDetailsButton__Arrow">
          <div className="MoreDetailsButton__Arrow__Body">
            <div className="MoreDetailsButton__Arrow__Side">
            </div>
          </div>
        </div>
      </div>
    )
  }
}