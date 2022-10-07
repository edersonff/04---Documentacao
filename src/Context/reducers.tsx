import { combineReducers } from 'redux'
import darkModeReducer from './Reducers/darkMode';



const reducers = combineReducers({
    darkMode: darkModeReducer,
});


export default reducers;