import {combineReducers, createStore} from 'redux';
import {profileReducer} from './reducers/profile-reducer';
import {authReducer} from './reducers/auth-reducer';
import {testReducer} from './reducers/test-reducer';

const reducers = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    test: testReducer
})

const Store = createStore(reducers);

export type StoreType = typeof Store;
export type RootStateType = ReturnType<typeof Store.getState>