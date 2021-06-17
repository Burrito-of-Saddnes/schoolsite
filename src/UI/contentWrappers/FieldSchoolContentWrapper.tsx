import React, { Component } from 'react';
import WinterButtonStatusStore from 'stores/WinterButtonStatusStore'
import SummerButtonStatusStore from 'stores/SummerButtonStatusStore'
import SpringButtonStatusStore from 'stores/SpringButtonStatusStore';
import { WinterButtonStatus, SummerButtonStatus, SpringButtonStatus } from 'utils/FieldSchoolStatusButtons'
import { inject, observer } from 'mobx-react';

import 'scss/FieldSchoolContentWrapper.scss';

interface FieldSchoolContentWrapperProps {
    winterButtonStatusStore?: WinterButtonStatusStore;
    summerButtonStatusStore?: SummerButtonStatusStore;
    springButtonStatusStore?: SpringButtonStatusStore;
}

@inject("winterButtonStatusStore", "summerButtonStatusStore", "springButtonStatusStore")
@observer
export default class FieldSchoolContentWrapper extends Component<FieldSchoolContentWrapperProps, {}> {
    render() {
        const { winterButtonStatusStore, summerButtonStatusStore, springButtonStatusStore } = this.props
        return(
            <div className="FieldSchoolContentWrapper">
                {
                    winterButtonStatusStore?.winterButtonStatus === WinterButtonStatus.ACTIVE ?
                        <div className="FieldSchoolContentWrapper__Winter">
                            wintersssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
                        </div>
                    :
                    summerButtonStatusStore?.summerButtonStatus === SummerButtonStatus.ACTIVE ?
                        <div className="FieldSchoolContentWrapper__Summer">
                            summer
                        </div>
                    :
                    springButtonStatusStore?.springButtonStatus === SpringButtonStatus.ACTIVE ?
                        <div className="FieldSchoolContentWrapper__Spring">
                            spring
                        </div>
                    :
                    <div className="FieldSchoolContentWrapper__Default">
                        default
                    </div>
                }
            </div>
        )
    }
}