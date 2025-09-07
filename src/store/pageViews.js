import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_BASE = import.meta.env.VITE_API_BASE ?? 'https://localhost:7108/api';

export const metricsApi = createApi({
  reducerPath: 'metricsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE,
    credentials: 'include',
    prepareHeaders: (headers) => {
      // Dev-only: header fallback if tenant isn’t resolved by Host
      const tid = localStorage.getItem('tenant_id');
      if (tid) headers.set('X-Tenant', tid);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // POST /api/metrics/track -> anonymous site hit
    trackHit: builder.mutation({
      query: (path = "/") => ({
        url: 'metrics/track',
        method: 'POST',
        body: { path, referrer: document.referrer || null },
      }),
    }),
  }),
});

export const { useTrackHitMutation } = metricsApi;
