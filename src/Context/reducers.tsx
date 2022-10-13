import { combineReducers } from 'redux'
import backgroundColorReducer from './Reducers/backgroundColor';
import darkModeReducer from './Reducers/darkMode';

const reducers = combineReducers({
    darkMode: darkModeReducer,
    background: backgroundColorReducer
});

export default reducers;