import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const candidateAPI = createApi({
  reducerPath: "candidateAPI",
  tagTypes: ["candidate"],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  }),
  endpoints: (builder) => ({
    getAllCandidate: builder.query({
      query: (params) => {
        return {
          url: "/register",
          method: "GET",
          params,
        };
      },
      providesTags: ["candidate"],
    }),
    registerCandidate: builder.mutation({
      query: (credentials) => {
        return {
          url: "/register",
          method: "POST",
          body: credentials,
        };
      },
      invalidatesTags: ["candidate"],
    }),
    deleteCandidate: builder.mutation({
      query: (id) => {
        return {
          url: `/register/${id}`,
          method: "DELETE",
          body: id,
        };
      },
      invalidatesTags: ["candidate"],
    }),
    updateCandidate: builder.mutation({
      query: ({ status, id }) => {
        return {
          url: `/register/${id}`,
          method: "PUT",
          body: status,
        };
      },
      invalidatesTags: ["candidate"],
    }),
  }),
});
export const {
  useRegisterCandidateMutation,
  useGetAllCandidateQuery,
  useDeleteCandidateMutation,
  useUpdateCandidateMutation,
} = candidateAPI;
