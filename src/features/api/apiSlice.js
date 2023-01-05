import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com"
  }),
  tagTypes: ["Photo"],
  endpoints: (builder) => ({
    getPhotos: builder.query({
      query: () => "/photos"
    })
  })
});
export const { useGetPhotosQuery } = apiSlice;
