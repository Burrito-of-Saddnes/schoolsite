import React, {Component} from 'react';
import { inject, observer } from 'mobx-react';
import MiniMenuStatusStore from 'stores/MiniMenuStatusStore';
import MiniMenuHideButton from 'UI/buttons/MiniMenuHideButton';
import LogoButton from 'UI/buttons/LogoButton';
import Copyrights from 'UI/Copyrights';
import 'scss/MiniMenuContent.scss';
import RoutingOld from 'utils/RoutingOld';

interface MiniMenuContentProps {
    miniMenuStatusStore?: MiniMenuStatusStore;
}

@inject("miniMenuStatusStore")
@observer
export default class MiniMenuContent extends Component<MiniMenuContentProps, {}> {
    render() {
        const { miniMenuStatusStore } = this.props;
        return (
            <div className="MiniMenuContent">
                <div className="MiniMenuContent_head">

                    <LogoButton/>

                    <MiniMenuHideButton
                      onClick={miniMenuStatusStore?.triggerDisabled}
                    />

                </div>

                <div className="MiniMenuContent_main">
                              
                    <div className="MiniMenuContent__phonewrapper">
                        <div className="MiniMenuContent__phone">
                            8 800 755 35 35
                        </div>
                    </div>   

                    <RoutingOld/>

                </div>

                <div className="MiniMenuContent_foot">
                    <Copyrights/>
                </div>

            </div>
        );
    }
}
