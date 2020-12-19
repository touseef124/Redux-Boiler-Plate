// redux part 1


// independent single reducer code
// const INITIAL_STATE={
//     name:"ghous"
// }

// export default (state = INITIAL_STATE)=>{
//     return state;
// }



// importing multiple reducers
import auth_reducer from './auth_reducer';
import app_reducer from './app_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
    auth:auth_reducer,
    app:app_reducer
})