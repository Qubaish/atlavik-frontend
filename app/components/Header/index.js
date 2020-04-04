import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Header() {
    return (
        <nav className="grey darken-3">
            <div className="nav-wrapper">
                <a href="#" className="brand-logo right">
                Logo
                </a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li>
                    <Link to="/">
                    <FormattedMessage {...messages.hotels} />
                    </Link>
                </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;
