import React, {Component} from 'react';

import 'scss/MiniMenuContent.scss';

interface MiniMenuHideButtonProps {
  onClick?: () => any;
}

export default class MiniMenuHideButton extends Component<MiniMenuHideButtonProps,{}>  {
  render() {
    const {
      onClick
    } = this.props;
    return(
      <div className="MiniMenuContent_hide"
        onClick={e => {
          onClick && onClick()
        }}
      >
        X
      </div>
    )
  }
}
