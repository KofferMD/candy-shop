const initialState = {
    items: {},
    totalCount: 0,
    totalPrice: 0,
};

const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CANDY_CART': {
            const newItems = {
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id]
                    ? [action.payload]
                    : [...state.items[action.payload.id], action.payload],
            }

            const allCandyes = [].concat.apply([], Object.values(newItems))
            const totalPrice = allCandyes.reduce((sum, obj) => obj.price + sum, 0)

            return {
                ...state,
                items: newItems,
                totalCount: allCandyes.length,
                totalPrice
            };
        }
        default:
            return state
    }
};

export default filtersReducer;

