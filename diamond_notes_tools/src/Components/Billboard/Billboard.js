import React from 'react';
import classes from './Billboard.module.css'

const Billboard = props => {

    return (
        <div className={classes.Billboard}>
            <div className={classes.Billboard_Section}>
                <h1 className={classes.Billboard_Text}>{props.displayText}</h1>
                <sub>Developed by: Ritter Gustave</sub>
            </div>
        </div>
    )

}

export default Billboard;