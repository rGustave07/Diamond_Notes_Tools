import React from 'react';
import classes from './Menu.module.css'
import MenuItem from '../../Components/MenuItem/MenuItem'

import { NavLink } from 'react-router-dom';

class Menu extends React.Component {

    state = {
        options: {
            home: {
                path: '/',
                displayText: 'Home',
                id: 1
            },
            addPatient: {
                path: '/Add_Patient',
                displayText: 'Add Patient',
                id: 2
            },
            lookupPatient: {
                path: '/Patient_Lookup',
                displayText: 'Lookup Patient',
                id: 3
            },
            logout: {
                path: '/logout',
                displayText: 'Logout',
                id: 4
            }
        }
    }

    render () {
        const menuItems = [];
        for (let key in this.state.options) {
            menuItems.push({...this.state.options[key]})
        }
        const menuDisplay = menuItems.map( item => {
            return (
                // <div className={classes.MenuItem}>
                    <NavLink to={item.path} exact className={classes.MenuItem} activeClassName={classes.Active_Link}>
                        <li>
                            {item.displayText}
                        </li>
                    </NavLink>
                // </div>
            )
        })

        return (
            <div className={classes.Menu}>
                <div className={classes.Inner_Menu}>
                    <h1 style={{fontSize: '1.5em'}}>Navigation</h1>
                    <ul className={classes.Menu_List}>
                        {menuDisplay}
                    </ul>
                </div>
                <div className={classes.Outer_Menu}>
                    <div className={classes.Arrow_Right}></div>
                </div>
            </div>
        )
    }
}

export default Menu;