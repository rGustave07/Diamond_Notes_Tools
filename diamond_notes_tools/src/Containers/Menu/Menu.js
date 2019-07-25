import React from 'react';
import classes from './Menu.module.css'
import MenuItem from '../../Components/MenuItem/MenuItem'

class Menu extends React.Component {

    state = {
        options: {
            home: {
                path: '/',
                displayText: 'Home',
                id: 1
            },
            addPatient: {
                path: '/add-patient',
                displayText: 'Add Patient',
                id: 2
            },
            lookupPatient: {
                path: '/lookup-patient',
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
                <MenuItem displayText={item.displayText} />
            )
        })

        return (
            <div className={classes.Menu}>
                <div className={classes.Inner_Menu}>
                    <h1 style={{fontSize: '1.5em'}}>Navigation</h1>
                    {menuDisplay}
                </div>
                <div className={classes.Outer_Menu}>
                    <div className={classes.Arrow_Right}></div>
                </div>
            </div>
        )
    }
}

export default Menu;