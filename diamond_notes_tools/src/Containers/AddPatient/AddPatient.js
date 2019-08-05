import React from 'react';
import classes from './AddPatient.module.css';

import Auxiliary from '../../HOC/Auxiliary/Auxiliary'

class AddPatient extends React.Component {

    render () {

        return (
            <Auxiliary>
                <div className={classes.AddPatient_Panel}>
                    {/* Heading */}
                    <div className={classes.Input_Box}>
                        <h1 className={classes.Heading}>Add Patient</h1>
                    </div>
                    {/* Add Form here */}
                </div>
            </Auxiliary>
        )

    }

}

export default AddPatient