import { combineReducers } from 'redux';

import filters from './filtersReducer';
import candyes from './candyesReducer';
import cart from './cartReducer'

const rootReducer = combineReducers({
    filters,
    candyes,
    cart,
})


export default rootReducer;