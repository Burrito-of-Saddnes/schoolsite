import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { RoutingStatus } from 'utils/RoutingStatus'

interface RoutingControllerProps {
    status: RoutingStatus;
    onHomeClick?: () => any;
    onFieldSchoolClick?: () => any;
    onOnlineClick?: () => any;
    onFulltimeClassClick?: () => any;
    onTournamentClick?: () => any;
    onAboutClick?: () => any;
}

export default class RoutingController extends Component<RoutingControllerProps, {}>{
    render(){

        const {
            status,
            onFieldSchoolClick,
            onOnlineClick,
            onFulltimeClassClick,
            onTournamentClick,
            onAboutClick,
        } = this.props

        return(
            <div>
                <Link to='/FieldSchool'>
                    <div className={ `Routing__content ${status === RoutingStatus.FIELDSCHOOL ? "Routing__content_active" : ""} ` }
                        onClick = { onFieldSchoolClick }
                    >
                        Выездные школы
                    </div>
                </Link>
                <Link to='/Online'>
                    <div className={ `Routing__content ${status === RoutingStatus.ONLINE ? "Routing__content_active" : ""} ` }
                        onClick = { onOnlineClick }
                    >
                        Онлайн
                    </div>
                </Link>
                <Link to='/FulltimeClass'>
                    <div className={ `Routing__content ${status === RoutingStatus.FULLTIMECLASS ? "Routing__content_active" : ""} ` }
                        onClick = { onFulltimeClassClick }
                    >
                        Очные занятия
                    </div>
                </Link>
                <Link to='/Tournament'>
                    <div className={ `Routing__content ${status === RoutingStatus.TOURNAMENT ? "Routing__content_active" : ""} ` }
                        onClick = { onTournamentClick }
                    >
                        Турниры / Олимпиады
                    </div>
                </Link>
                <Link to='/About'>
                    <div className={ `Routing__content ${status === RoutingStatus.ABOUT ? "Routing__content_active" : ""} ` }
                        onClick = { onAboutClick }
                    >
                        О нас
                    </div>
                </Link>
            </div>
        );
    }
}
