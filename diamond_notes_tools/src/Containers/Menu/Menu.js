import React from 'react';
import classes from './Menu.module.css';
import NavButton from '../../Components/UI_Components/NavButton/NavButton';

import { NavLink } from 'react-router-dom';

class Menu extends React.Component {

    // Handle this state in the redux store if you're going to have other components do routing as well
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
                <NavButton path={item.path} displayText={item.displayText} />
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