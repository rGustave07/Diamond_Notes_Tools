import React from 'react';
import Layout from './HOC/Layout/Layout'
import ContentArea from './Containers/ContentArea/ContentArea'

import classes from './App.module.css'

class App extends React.Component {


	render () {
		return (
			<Layout>
				<ContentArea />
			</Layout>
		);
	}

}

export default App;
