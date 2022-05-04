// import { createStore } from 'redux';

import {configureStore, createSlice} from '@reduxjs/toolkit'; 

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0,
    },
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        add: (state, action) => {
            state.count += action.payload;
        },
    },
});


export const actions = counterSlice.actions
const store = configureStore({reducer: counterSlice.reducer});

export default store


// const reducer = (state = { count: 0}, action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//             return {
//                 ...state,
//                 count: state.count + 1
//             };
//         case 'DECREMENT':
//             return {
//                 ...state,
//                 count: state.count - 1
//             };
//         case 'ADD':
//             return {
//                 ...state,
//                 count: state.count + action.payload
//             };
//         default:
//             return state;
//     }
// };


// const store = createStore(reducer);
