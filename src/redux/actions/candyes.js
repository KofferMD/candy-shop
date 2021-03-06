import axios from 'axios';

export const setLoaded = payload => ({
    type: 'SET_LOADED',
    payload,
})

export const fetchCandyes = (sortBy, category) => (dispatch) => {
    dispatch(setLoaded(false))
    axios.get(`/items?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
        .then(({ data }) => {
            dispatch(setCandyes(data))
        });
};

export const setCandyes = (items) => ({
    type: 'SET_CANDYES',
    payload: items,
});
