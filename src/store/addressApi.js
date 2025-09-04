import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_BASE = 'https://localhost:7108/api';

export const addressApi = createApi({
  reducerPath: 'addressApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    getAddress: builder.query({
      query: () => 'address', // GET /api/address
    }),
    updateAddress: builder.mutation({
      query: (body) => ({
        url: 'address',
        method: 'PUT',
        body,
      }),
    }),
  }),
});

export const { useGetAddressQuery, useUpdateAddressMutation } = addressApi;
