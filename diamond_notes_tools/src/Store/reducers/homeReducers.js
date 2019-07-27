import * as actionTypes from '../actions/actionTypes';

const initialState = {
    testBool: false
}

const homeReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case actionTypes.TEST_ACTION:
            return state;

        default:
            return state;
    }

}

export default homeReducer;