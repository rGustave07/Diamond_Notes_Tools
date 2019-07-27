import React from 'react';
import Button from '../../Components/UI_Components/Button/Button'

import classes from './Home.module.css'

class Home extends React.Component {

    render () {
        return (
            <div className={classes.Jumbotron}>
                <h1>Welcome to the Diamond Medical Notes application</h1>
                <p>Navigate using the bar on the right</p>
                <p>Or select one of the following:</p>
                <div className={classes.Btn_Group}>
                    <Button styleClasses={[]} btnText='Test Text'/>
                    <Button styleClasses={[]} btnText='Test Text'/>
                </div>
            </div>
        )
    }
}

export default Home