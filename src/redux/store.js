import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import favoritesReducer from './slice/favoriteSlice';
import workingSliceReducer from './slice/workingSlice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['working'], // Exclude the working slice from persistence
};

const rootReducer = combineReducers({
  favorites: favoritesReducer, // This will be persisted
  working: workingSliceReducer, // This will not be persisted
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
