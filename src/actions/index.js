// all axios calls will be done here
// if you add an argument you can pass it in your component
// otherwise you can just update the object key here so it'll update through the reducer.

import types from './types';

export function tick(now){
    return {
        type: types.UPDATE_TIME,
        payload: now
    }
}


