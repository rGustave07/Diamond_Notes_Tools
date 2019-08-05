import * as actionTypes from '../actions/actionTypes';

const initialState = {
        options: {
            home: {
                path: '/',
                displayText: 'Home',
                id: 1
            },
            addPatient: {
                path: '/Add_Patient',
                displayText: 'Add Patient',
                id: 2
            },
            lookupPatient: {
                path: '/Patient_Lookup',
                displayText: 'Lookup Patient',
                id: 3
            },
            logout: {
                path: '/logout',
                displayText: 'Logout',
                id: 4
            }
        }
    }

const menuReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case actionTypes.TEST_ACTION:
            return state;

        default:
            return state;
    }

}

export default menuReducer;