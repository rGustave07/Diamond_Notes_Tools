import React from 'react';
import classes from './Header.module.css'

class Header extends React.Component {

    state = {
        
    }

    render () {
        return (
            <div className={classes.Header}>
                <div className={classes.Header_Section}>
                    <h1 className={classes.Header_Text}>Diamond Medical Notes Tool</h1>
                    <sub>Developed by: Ritter Gustave</sub>
                </div>
            </div>
        )
    }

}

export default Header