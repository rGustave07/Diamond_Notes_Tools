import React from 'react';
import classes from './NavButton.module.css'
import { NavLink } from 'react-router-dom';

const NavButton = props => {

    return (
        <NavLink exact to={props.path}className={classes.MenuItem} activeClassName={classes.Active_Link}>
            <li>
                {props.displayText}
            </li>
        </NavLink>
    )
}

export default NavButton