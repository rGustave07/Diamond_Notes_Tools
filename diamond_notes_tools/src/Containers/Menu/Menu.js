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
        const navElementsArray = [];
        for (let key in this.state.options) {
            navElementsArray.push({
                id: this.state.options[key].id,
                displayText: this.state.options[key].displayText
            })
        }
        let menuDisplay = navElementsArray.map(entry => (
            <MenuItem key={entry.id} displayText={entry.displayText} />
        ))

        return (
            <div className={classes.Menu}>
                <h1 className={classes.Menu_Header}>Navigation Menu</h1>
                {menuDisplay}
            </div>
        )
    }
}

export default Menu;