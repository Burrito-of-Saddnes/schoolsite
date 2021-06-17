/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { Component } from 'react';
import { SummerButtonStatus } from 'utils/FieldSchoolStatusButtons';
import SummerButtonStatusStore from 'stores/SummerButtonStatusStore';
import { inject, observer } from 'mobx-react';

import 'scss/SummerButton.scss';

interface SummerButtonProps {
  text: string
  onClick?: () => any;
  summerButtonStatusStore?: SummerButtonStatusStore;
}

@inject("summerButtonStatusStore")
@observer
export default class SummerButton extends Component<SummerButtonProps, {}> {

  render() {
    const { text, summerButtonStatusStore, onClick } = this.props;

    return(
      <button
        onClick={e => {
          onClick && onClick()
        }}
        className={ `SummerButton ${summerButtonStatusStore?.summerButtonStatus === SummerButtonStatus.ACTIVE ? "SummerButton__Active" : ""} ` }
      >
        <div className="SummerButton__Text">{text}</div>
      </button>
    )
  }
}