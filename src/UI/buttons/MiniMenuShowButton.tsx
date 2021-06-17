import React, {Component} from 'react';

import 'scss/Header.scss';

interface MiniMenuShowButtonProps {
  onClick?: () => any;
}

export default class MiniMenuShowButton extends Component<MiniMenuShowButtonProps,{}>  {
  render() {
    const {
      onClick
    } = this.props;
    return(
      <div className="Header__MiniMenu_show"
        onClick={e => {
          onClick && onClick()
        }}
      >
        ☰
      </div>
    )
  }
}