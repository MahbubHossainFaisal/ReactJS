import { createStore } from 'redux';
import { initialState, Reducer } from './reducer.js';

export const configureStore = () => {
    const store = createStore(
        Reducer,
        initialState
    );

    return store;
}