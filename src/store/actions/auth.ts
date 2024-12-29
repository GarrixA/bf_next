/* eslint-disable @typescript-eslint/no-explicit-any */
import baseAPI from "@/utils/api";

const userApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<any, any>({
      query: (body: any) => ({
        url: "/user/login",
        method: "POST",
        body,
      }),
    }),
    rgister: builder.mutation<any, any>({
      query: (body: any) => ({
        url: "/users/signup",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginMutation, useRgisterMutation } = userApi;
