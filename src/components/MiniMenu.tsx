import React, {Component} from 'react';
import { inject, observer } from 'mobx-react';
import MiniMenuStatusStore from 'stores/MiniMenuStatusStore'
import { MiniMenuStatus } from 'utils/MiniMenuStatus'
import MiniMenuShowButton from 'UI/buttons/MiniMenuShowButton';
import MiniMenuContent from 'UI/contentWrappers/MiniMenuContent';

interface MiniMenuProps {
    miniMenuStatusStore?: MiniMenuStatusStore;
}

@inject("miniMenuStatusStore")
@observer
export default class MiniMenu extends Component<MiniMenuProps, {}> {
    render() {
        const { miniMenuStatusStore } = this.props
        return (
            <div>
                {
                    miniMenuStatusStore?.miniMenuStatus === MiniMenuStatus.DISABLED ?
                        <MiniMenuShowButton  
                            onClick={miniMenuStatusStore?.triggerActive}
                        />
                    :
                    miniMenuStatusStore?.miniMenuStatus === MiniMenuStatus.ACTIVE ?
                        <MiniMenuContent/>
                    : ""
                }
                
                
            </div>
        );
    }
}
