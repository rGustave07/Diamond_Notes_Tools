import React from 'react';
import Billboard from '../Billboard/Billboard'

class Header extends React.Component {

    state = {
       paths: {
           home: 'Diamond Medical Notes Tool'
       } 
    }

    render () {
        return (
            <React.Fragment>
                <Billboard displayText={this.state.paths.home} />
            </React.Fragment>
        )
    }

}

export default Header;