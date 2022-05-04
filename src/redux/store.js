import { createStore } from 'redux';

const reducer = (state = { count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1
            };
        case 'ADD':
            return {
                ...state,
                count: state.count + action.payload
            };
        default:
            return state;
    }
};


const store = createStore(reducer);

export default store 