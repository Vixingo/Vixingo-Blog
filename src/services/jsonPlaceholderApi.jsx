import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jsonPlaceholderApi = createApi({
    reducerPath: "jsonPlaceholderApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com",
    }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => ({
                url: "/posts",
                method: "GET",
                body: {
                    query: `
            query {
              posts {
                id
                title
                body
              }
            }
          `,
                },
                headers: {
                    "Content-Type": "application/json",
                },
            }),
        }),
    }),
});

export const { useGetPostsQuery } = jsonPlaceholderApi;
