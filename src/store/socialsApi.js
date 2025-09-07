import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_BASE = 'https://localhost:7108/api';

export const socialsApi = createApi({
  reducerPath: 'socialsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    getSocials: builder.query({
      query: () => 'socials', // GET /api/socials
    }),
  }),
});

export const { useGetSocialsQuery, useUpdateSocialsMutation } = socialsApi;
