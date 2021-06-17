import React, { Component } from 'react';
import WinterButtonStatusStore from 'stores/WinterButtonStatusStore'
import SummerButtonStatusStore from 'stores/SummerButtonStatusStore'
import SpringButtonStatusStore from 'stores/SpringButtonStatusStore';
import { inject, observer } from 'mobx-react';

import WinterButton from 'UI/buttons/WinterButton';
import SummerButton from 'UI/buttons/SummerButton';
import SpringButton from 'UI/buttons/SpringButton';
import FieldSchoolContentWrapper from 'UI/contentWrappers/FieldSchoolContentWrapper';

import 'scss/FieldSchool.scss';


interface FieldSchoolProps {
  winterButtonStatusStore?: WinterButtonStatusStore;
  summerButtonStatusStore?: SummerButtonStatusStore;
  springButtonStatusStore?: SpringButtonStatusStore;
}

@inject("winterButtonStatusStore", "summerButtonStatusStore", "springButtonStatusStore")
@observer
export default class FieldSchool extends Component<FieldSchoolProps, {}> {
  render() {
    const { winterButtonStatusStore, summerButtonStatusStore, springButtonStatusStore } = this.props
    return(
      <div className="FieldSchool">
        <div className="FieldSchool__ButtonsWrapper">
          <WinterButton
            text="ЗИМНЯЯ ШКОЛА"
            onClick={winterButtonStatusStore?.triggerActive}
          />
          <SummerButton
            text="ЛЕТНЯЯ ШКОЛА"
            onClick={summerButtonStatusStore?.triggerActive}
          />
          <SpringButton
            text="ВЕСЕННЯЯ ШКОЛА"
            onClick={springButtonStatusStore?.triggerActive}
          />
        </div>
        <div className="FieldSchool__Content">
          <FieldSchoolContentWrapper/>
        </div>
          
      </div>
    )
  }
}