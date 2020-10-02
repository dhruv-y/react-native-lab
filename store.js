import { combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'

const rootReducer = combineReducers({
    form: formReducer
})

const persisConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['form']
};

const persistedReducer = persistReducer(persisConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store)

export default store;