import { configureStore } from '@reduxjs/toolkit';
import { aboutApi } from './aboutApi.js';
import { socialsApi } from './socialsApi.js';

export const store = configureStore({
  reducer: {
    [aboutApi.reducerPath]: aboutApi.reducer,
    [socialsApi.reducerPath]: socialsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(aboutApi.middleware, socialsApi.middleware),
});
