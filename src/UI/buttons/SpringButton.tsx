/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { Component } from 'react';
import { SpringButtonStatus } from 'utils/FieldSchoolStatusButtons';
import SpringButtonStatusStore from 'stores/SpringButtonStatusStore';
import { inject, observer } from 'mobx-react';

import 'scss/SpringButton.scss';

interface SpringButtonProps {
  text: string
  onClick?: () => any;
  springButtonStatusStore?: SpringButtonStatusStore;
}

@inject("springButtonStatusStore")
@observer
export default class SpringButton extends Component<SpringButtonProps, {}> {

  render() {
    const { text, springButtonStatusStore, onClick } = this.props;

    return(
      <button
        onClick={e => {
          onClick && onClick()
        }}
        className={ `SpringButton ${springButtonStatusStore?.springButtonStatus === SpringButtonStatus.ACTIVE ? "SpringButton__Active" : ""} ` }
      >
        <div className="SpringButton__Text">{text}</div>
      </button>
    )
  }
}