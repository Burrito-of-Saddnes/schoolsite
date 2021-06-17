import React, { Component } from 'react';

import RoutingController from 'UI/contentWrappers/RoutingControler';
import RoutingStatusStateMachineContainer from 'containers/RoutingStatusStateMachineContainer';
import { RoutingStatus } from 'utils/RoutingStatus'
import 'scss/Routing.scss';

export default class Routing extends Component{
    render(){
        return(
            <RoutingStatusStateMachineContainer initialStatus = { RoutingStatus.HOME }>
                {({ status, onFieldSchoolClick, onOnlineClick, onFulltimeClassClick, onTournamentClick, onAboutClick }) => (
                  <RoutingController
                      { ... {
                          status,
                          onFieldSchoolClick,
                          onOnlineClick,
                          onFulltimeClassClick,
                          onTournamentClick,
                          onAboutClick
                      }}
                  />
                )}
            </RoutingStatusStateMachineContainer>
        );
    }
}