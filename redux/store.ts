import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import modelsReducer from './reducers/modelsReducer'
import {composeWithDevTools} from 'redux-devtools-extension';

const rootReducer = combineReducers({
    modelsReducer,
})

export const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        }
        if (state.count) nextState.count = state.count // preserve count value on client side navigation
        return nextState
    } else {
        return rootReducer(state, action)
    }
}

const makeStore: MakeStore<RootState> = (context: Context) => createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof rootReducer>

import {Context, createWrapper, HYDRATE, MakeStore} from "next-redux-wrapper";

export const wrapper = createWrapper<RootState>(makeStore, {debug: true});



