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

// CarouselEntity and CarouselItem shape for reference
// CarouselEntity: { Id, TenantId, Items: [CarouselItem, ...] }
// CarouselItem: { Id, ImageUrl, Description, CarouselEntityId, Carousel }

export const carouselApi = createApi({
  reducerPath: 'carouselApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_BASE}/carousel`,
    credentials: 'include',
    prepareHeaders: (headers) => {
      // Dev-only: header fallback if tenant isn't resolved by Host
      const tid = localStorage.getItem('tenant_id');
      if (tid) headers.set('X-Tenant', tid);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCarousels: builder.query({
      query: () => '/', // Returns all CarouselEntity objects
      transformResponse: (dto) => ({
        ...dto,
        items: dto?.items?.map(item => ({
          ...item,
          imageUrl: absolutize(item?.imageUrl),
        })) || [],
      }),
    }),
    getCarouselById: builder.query({
      query: (id) => `/${id}`, // Returns a single CarouselEntity by Id
    }),
    addCarousel: builder.mutation({
      query: (carousel) => ({
        url: '/',
        method: 'POST',
        body: carousel, // Should match CarouselEntity shape
      }),
    }),
    updateCarousel: builder.mutation({
      query: ({ Id, ...carousel }) => ({
        url: `/${Id}`,
        method: 'PUT',
        body: carousel, // Should match CarouselEntity shape
      }),
    }),
    deleteCarousel: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetCarouselsQuery,
  useGetCarouselByIdQuery,
  useAddCarouselMutation,
  useUpdateCarouselMutation,
  useDeleteCarouselMutation,
} = carouselApi;