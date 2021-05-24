import { combineReducers } from 'redux';

import filtersReducer from './filtersReducer';
import candyesReducer from './candyesReducer';

const rootReducer = combineReducers({
    filters: filtersReducer,
    candyes: candyesReducer
})



export default rootReducer;