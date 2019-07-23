import React from 'react';
import Header from './Containers/Header/Header'
import Menu from './Containers/Menu/Menu'

import classes from './App.module.css'

class App extends React.Component {


	render () {
		return (
			<React.Fragment>
				<Header />
				<div className={classes.Separator}>
					<Menu />
				</div>
			</React.Fragment>
		);
	}

}

export default App;
