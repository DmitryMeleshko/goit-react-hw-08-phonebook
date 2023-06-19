import { configureStore } from '@reduxjs/toolkit'

import { contactReducer } from './contactSlice'
import {filterReducer} from '../redux/filterSlice'

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
  import storage from 'redux-persist/lib/storage';
  import { authReducer } from './authSlice';


export const Store = configureStore({
    reducer: {
        contacts: filterReducer,
        filter: filterReducer
    }
});

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
  };
  
  const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
  
  export const store = configureStore({
    reducer: {
      contacts: contactReducer,
      filter: filterReducer,
      auth: persistedAuthReducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
  
  export const persistor = persistStore(store);