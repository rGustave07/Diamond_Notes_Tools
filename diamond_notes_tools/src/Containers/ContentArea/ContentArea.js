import React from 'react';
import Home from '../Home/Home'

import classes from './ContentArea.module.css'

class ContentArea extends React.Component {


    render () {
        return (
            <div className={classes.ContentArea_Main}>
                <Home />
            </div>
        )
    }

}

export default ContentArea;