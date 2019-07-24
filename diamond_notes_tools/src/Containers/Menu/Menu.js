import React from 'react';
import classes from './Menu.module.css'
import MenuItem from '../../Components/MenuItem/MenuItem'

class Menu extends React.Component {

    state = {
        showSideBar: false,
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

    showSideBarHandler() {
        this.setState({showSideBar: !this.state.showSideBar})
        console.log(this.state.showSideBar);
    }

    testfunction () {
        console.log('teststuff')
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

        const sideBarStatus = this.state.showSideBar
            ? [ classes.Menu_Full, classes.Menu_Header ] 
            : [ classes.Menu_Mini ]
        const sideBar = (
            <React.Fragment>
                {this.state.showSideBar
                    ? <h1 className={sideBarStatus.join(' ')}>Navigation Menu</h1>
                    : <div className={classes.Hamburger_Menu} onClick={this.testfunction}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                }
            </React.Fragment>
        )

        return (
            <div className={sideBarStatus}>
                {sideBar}
            </div>
        )
    }
}

export default Menu;