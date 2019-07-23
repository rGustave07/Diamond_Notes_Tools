import React from 'react';
import classes from './MenuItem.module.css'

const MenuItem = props => {

    return (
        <div className={classes.MenuItem}>
            <button className={classes.Menu_btn}>{props.displayText}</button>
        </div>
    )
}

export default MenuItem