
const initialState = {
    item: [],
    isLoaded: false
};

const candyesReducer = (state = initialState, action) => {
    if (action.type === 'SET_CANDYES') {
        return {
            ...state,
            item: action.payload
        }
    }
    return state;
};

export default candyesReducer;