//state of object lives here before updated to store.
import types from '../actions/types';

const DEFAULT_STATE = {
    time: new Date().toLocaleTimeString(),
    header: 'The time is...'
};

function clockReducer(state = DEFAULT_STATE, action){
    
    switch(action.type){
        case types.UPDATE_TIME:
            return { ...state,
                time: action.payload,
                };
        default: 
            return state;
    }

}

export default clockReducer;

