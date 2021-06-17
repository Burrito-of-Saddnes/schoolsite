/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { Component } from 'react';
import { WinterButtonStatus } from 'utils/FieldSchoolStatusButtons';
import WinterButtonStatusStore from 'stores/WinterButtonStatusStore'
import { inject, observer } from 'mobx-react';

import 'scss/WinterButton.scss';

interface WinterButtonProps {
  text: string
  onClick?: () => any;
  winterButtonStatusStore?: WinterButtonStatusStore;
}

@inject("winterButtonStatusStore")
@observer
export default class WinterButton extends Component<WinterButtonProps, {}> {

  render() {
    const { text, winterButtonStatusStore, onClick } = this.props;

    return(
      <button
        onClick={e => {
          onClick && onClick()
        }}
        className={ `WinterButton ${winterButtonStatusStore?.winterButtonStatus === WinterButtonStatus.ACTIVE ? "WinterButton__Active" : ""} ` }
      >
        <div className="WinterButton__Text">{text}</div>
      </button>
    )
  }
}