import { configureStore } from '@reduxjs/toolkit';
import { aboutApi } from './aboutApi.js';
import { socialsApi } from './socialsApi.js';
import { carouselApi } from './carouselApi.js';
import { metricsApi } from './pageViews.js';

export const store = configureStore({
  reducer: {
    [aboutApi.reducerPath]: aboutApi.reducer,
    [socialsApi.reducerPath]: socialsApi.reducer,
    [carouselApi.reducerPath]: carouselApi.reducer,
    [metricsApi.reducerPath]: metricsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(aboutApi.middleware, socialsApi.middleware, carouselApi.middleware, metricsApi.middleware),
});
