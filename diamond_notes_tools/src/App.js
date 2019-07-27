import React from 'react';
import Layout from './HOC/Layout/Layout'
import Home from './Containers/Home/Home'

import classes from './App.module.css'

class App extends React.Component {


	render () {
		return (
			<Layout>
				<Home />
			</Layout>
		);
	}

}

export default App;
