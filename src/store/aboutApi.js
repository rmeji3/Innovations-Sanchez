// src/store/aboutApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_BASE = import.meta.env.VITE_API_BASE ?? 'https://localhost:7108/api';
// Turn .../api -> origin (e.g., https://localhost:7108)
const API_ORIGIN = API_BASE.replace(/\/api\/?$/, '');

const absolutize = (url) => {
  if (!url) return url;
  // already absolute?
  if (/^https?:\/\//i.test(url)) return url;
  // ensure leading slash
  const path = url.startsWith('/') ? url : `/${url}`;
  return `${API_ORIGIN}${path}`;
};

export const aboutApi = createApi({
  reducerPath: 'aboutApi',
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
  tagTypes: ['About'],
  endpoints: (builder) => ({
    // GET /api/about -> { title, description, imageUrl }
    getAbout: builder.query({
      query: () => 'about',
      transformResponse: (dto) => ({
        ...dto,
        imageUrl: absolutize(dto?.imageUrl),
      }),
      providesTags: ['About'],
    }),

    // PATCH /api/about -> { title?, description? }
    patchAbout: builder.mutation({
      query: (body) => ({
        url: 'about',
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['About'],
    }),
  }),
});

export const {
  useGetAboutQuery,
  usePatchAboutMutation,
} = aboutApi;
