// src/store/menuApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_BASE = import.meta.env.VITE_API_BASE ?? "https://localhost:7108/api";
// Turn .../api -> origin (e.g., https://localhost:7108)
const API_ORIGIN = API_BASE.replace(/\/api\/?$/, "");

const absolutize = (url) => {
  if (!url) return url;
  if (/^https?:\/\//i.test(url)) return url; // already absolute
  const path = url.startsWith("/") ? url : `/${url}`;
  return `${API_ORIGIN}${path}`;
};

export const menuApi = createApi({
  reducerPath: "menuApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE,
    credentials: "include",
    prepareHeaders: (headers) => {
      const tid = localStorage.getItem("tenant_id"); // dev-only
      if (tid) headers.set("X-Tenant", tid);
      return headers;
    },
  }),
  tagTypes: ["Menu"],
  endpoints: (builder) => ({
    // GET /api/menu
    getMenu: builder.query({
      query: () => "menu",
      transformResponse: (dto) => ({
        ...dto,
        categories: (dto?.categories ?? []).map((c) => ({
          ...c,
          items: (c.items ?? []).map((i) => ({
            ...i,
            imageUrl: absolutize(i.imageUrl),
          })),
        })),
      }),
      providesTags: ["Menu"],
    }),

    // PATCH /api/menu
    patchMenu: builder.mutation({
      query: (body) => ({
        url: "menu",
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Menu"],
    }),

    // POST /api/menu/images
    uploadMenuImage: builder.mutation({
      query: (file) => {
        const form = new FormData();
        form.append("image", file);
        return {
          url: "menu/images",
          method: "POST",
          body: form,
        };
      },
      transformResponse: (res) => ({
        imageUrl: absolutize(res.imageUrl),
      }),
    }),
  }),
});

export const {
  useGetMenuQuery,
  usePatchMenuMutation,
  useUploadMenuImageMutation,
} = menuApi;
