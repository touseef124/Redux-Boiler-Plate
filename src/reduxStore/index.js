// redux part 2

// independent single reducer receiving code
// or combine reducer receiving code 
import reducer from './reducer';
import {createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';


const store=createStore(reducer,{},applyMiddleware(thunk));

export default store;



