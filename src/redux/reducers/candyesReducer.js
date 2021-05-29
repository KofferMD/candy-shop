
const initialState = {
    item: [],
    isLoaded: false
};

const candyesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CANDYES':
            return {
                ...state,
                items: action.payload,
                isLoaded: true
            }
        case 'SET_LOADED':
            return {
                ...state,
                isLoaded: action.payload,
            }
        default:
            return state;
    }
};

export default candyesReducer;