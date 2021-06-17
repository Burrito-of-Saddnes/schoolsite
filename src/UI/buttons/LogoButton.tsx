import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import 'scss/Header.scss';

export default class LogoButton extends Component {
    render() {
        return(
            <Link to='/'
                onClick = {(e) => setTimeout(() => { window.location.reload() }, 0)}
            >
                <div className="Header__logowrapper">
                    <div className="Header__logo">
                        logo
                    </div>
                </div>
            </Link>
        );
    }
}