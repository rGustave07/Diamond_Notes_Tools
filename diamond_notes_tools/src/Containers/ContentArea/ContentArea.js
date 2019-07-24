import React from 'react';

import classes from './ContentArea.module.css'

class ContentArea extends React.Component {


    render () {
        return (
            <div className  ={classes.ContentArea_Main}>
                <h1>Area for data stuff</h1>
            </div>
        )
    }

}

export default ContentArea;