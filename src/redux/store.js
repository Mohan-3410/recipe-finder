import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './slice/favoriteSlice';

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});
