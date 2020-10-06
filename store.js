import { applyMiddleware, createStore, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
import registerReducer from './reducers/registerReducer';

const rootReducer = combineReducers({
    registerReducer: registerReducer,
});

const persisConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['registerReducer',]
};

const persistedReducer = persistReducer(persisConfig, rootReducer);

const store = createStore(
    persistedReducer,
    applyMiddleware(
        createLogger(),
    ),
);

let persistor = persistStore(store);

export {
    store,
    persistor,
};