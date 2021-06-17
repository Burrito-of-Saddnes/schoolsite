import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniMenuStatusStore from 'stores/MiniMenuStatusStore'
import 'scss/Routing.scss';
import { inject, observer } from 'mobx-react';

interface MiniMenuContentProps {
    miniMenuStatusStore?: MiniMenuStatusStore;
}

@inject("miniMenuStatusStore")
@observer
export default class Routing extends Component<MiniMenuContentProps, {}>{
render(){
    const { miniMenuStatusStore } = this.props;
    return(
        <div>
            <Link to='/FieldSchool'>
                <div className="Routing__content"
                    onClick = {miniMenuStatusStore?.triggerDisabled}
                >
                    Выездные школы
                </div>
            </Link>
            <Link to='/Online'>
                <div className="Routing__content"
                    onClick = {miniMenuStatusStore?.triggerDisabled}
                >
                    Онлайн
                </div>
            </Link>
            <Link to='/FulltimeClass'>
                <div className="Routing__content"
                    onClick = {miniMenuStatusStore?.triggerDisabled}
                >
                    Очные занятия
                </div>
            </Link>
            <Link to='/Tournament'>
                <div className="Routing__content"
                    onClick = {miniMenuStatusStore?.triggerDisabled}
                >
                    Турниры / Олимпиады
                </div>
            </Link>
            <Link to='/About'>
                <div className="Routing__content"
                    onClick = {miniMenuStatusStore?.triggerDisabled}
                >
                    О нас
                </div>
            </Link>
        </div>
        );
    }
}