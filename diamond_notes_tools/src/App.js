import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './HOC/Layout/Layout'
import Home from './Containers/Home/Home'
import PatientLookup from './Containers/PatientLookup/PatientLookup'
import AddPatient from './Containers/AddPatient/AddPatient'

class App extends React.Component {
	
	render () {
		const routes = (
			<Switch>
				<Route path="/Add_Patient" exact component={AddPatient} />
				<Route path="/Patient_Lookup" exact component={PatientLookup}/>
				<Route path="/" exact component={Home} />
			</Switch>
		)

		return (
			<Layout>
				{routes}
			</Layout>
		);
	}

}

export default App;
