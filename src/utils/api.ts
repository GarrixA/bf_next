import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { BASE_API_URL } from "@/utils/config/constants";
import { RootState } from "@/store/index";

const baseAPI = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL,
    prepareHeaders: async (headers, { getState }) => {
      const {
        appReducer: { token },
      } = getState() as RootState;
      if (token) headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: [],
  endpoints: () => ({}),
});

export default baseAPI;
