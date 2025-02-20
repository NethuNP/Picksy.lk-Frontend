import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../utils/apiConfig";
import { RootState } from "@/app/redux/store/store";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL , prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token; // Correctly access the token from the state
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  }, }),
  
  endpoints: (builder) => ({ // Define endpoints here
    // Add your endpoints as necessary, for example:
    // getPosts: builder.query({
    //   query: () => '/posts',
    // }),
  }),
});
