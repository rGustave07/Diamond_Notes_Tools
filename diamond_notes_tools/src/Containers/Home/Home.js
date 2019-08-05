import React from 'react';
import { connect } from 'react-redux';

import Button from '../../Components/UI_Components/Button/Button'

import classes from './Home.module.css'

class Home extends React.Component {

    componentDidMount () {
        console.log(this.props.menu)
    }

    render () {
        return (
            <div className={classes.Jumbotron}>
                <h1>Welcome to the Diamond Medical Notes application</h1>
                <p>Navigate using the bar on the right</p>
                <p>Or select one of the following:</p>
                <div>
                    <ul className={classes.Btn_Group}>
                        <li>
                            <Button btnText='Add Patient' pathTo={this.props.menu.addPatient.path}/>
                        </li>
                        <li>
                            <Button btnText='Patient Lookup' pathTo={this.props.menu.lookupPatient.path}/>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        menu: state.menuReducer.options
    }
}

export default connect(mapStateToProps)(Home);