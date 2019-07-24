import React from 'react';
import Header from '../../Containers/Header/Header';
import Menu from '../../Containers/Menu/Menu';

import classes from './Layout.module.css'

class Layout extends React.Component {


    render () {
        return (
            <React.Fragment>
                <Header />
                <div className={classes.Separator}>
                    <Menu />
                    <main className={classes.Content}>
                        {this.props.children}
                    </main>
                </div>
            </React.Fragment>
        )
    }
}

export default Layout;