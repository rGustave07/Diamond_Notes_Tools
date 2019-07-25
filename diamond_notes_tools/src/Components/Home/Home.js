import React from 'react';

import classes from './Home.module.css'

const Home = props => {

    return (
        <div className={classes.Jumbotron}>
            <h1>Welcome to the Diamond Medical Notes application</h1>
            <p>Navigate using the bar on the right</p>
            <p>Or select one of the following:</p>
            {/* Add Buttons for Looking up patient and adding patient */}
        </div>
    )
}

export default Home