/* eslint-disable @typescript-eslint/no-explicit-any */
import baseAPI from "@/utils/api";
import Cookies from "js-cookie";

const token = Cookies.get("access_token");
const userApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<any, any>({
      query: (body: any) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
    }),
    register: builder.mutation<any, any>({
      query: (body: any) => ({
        url: "/signup/registration",
        method: "POST",
        body,
      }),
    }),
    verify_user: builder.query({
      query: (args) => {
        const { status, message } = args;
        return {
          url: `/signup/virify-email?status=${status}&message=${message}`,
          method: "GET",
        };
      },
    }),
    request_email_confirmation: builder.mutation<any, any>({
      query: (body: any) => ({
        url: "/signup/link_resend",
        method: "POST",
        body,
      }),
    }),
    business_profile: builder.mutation<any, any>({
      query: (body: any) => ({
        url: "/auth/confirmation",
        method: "POST",
        body,
        headers: {
          "X-CSRF-TOKEN": token,
        },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useVerify_userQuery,
  useRequest_email_confirmationMutation,
  useBusiness_profileMutation,
} = userApi;
