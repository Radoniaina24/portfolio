import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const coursAPI = createApi({
  reducerPath: "coursAPI",
  tagTypes: ["cours"],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    credentials: "include", // S'assurer que les cookies sont envoyés avec la requête
  }),
  keepUnusedDataFor: 30,
  endpoints: (builder) => ({
    getAllCours: builder.query({
      query: (params) => {
        return {
          url: `cours`,
          method: "GET",
          params,
        };
      },
      providesTags: ["cours"],
    }),
    updateCours: builder.mutation({
      query: ({ data, id }) => {
        return {
          url: `/cours/${id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["cours"],
    }),
    addCours: builder.mutation({
      query: (obj) => {
        return {
          url: `cours`,
          method: "POST",
          body: obj,
        };
      },
      invalidatesTags: ["cours"],
    }),

    deleteCours: builder.mutation({
      query: (id) => {
        return {
          url: `/cours/${id}`,
          method: "DELETE",
          body: id,
        };
      },
      invalidatesTags: ["cours"],
    }),
  }),
});

export const {
  useGetAllCoursQuery,
  useUpdateCoursMutation,
  useDeleteCoursMutation,
  useAddCoursMutation,
} = coursAPI;
