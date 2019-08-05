import React from 'react';
import { Link } from 'react-router-dom'

import classes from './Button.module.css'

const Button = props => {
    // I should only create this component if I plan on reusing it. Otherwise I can
    // just pass down props to the Home Component
    // const styles = [...props.styleClasses, classes.Button]

    return (
        <button className={classes.Button}>
            <Link to={props.pathTo}>
                {props.btnText}
            </Link>
        </button>
    )
}

export default Button;