import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

export const themeApi = createApi({
  reducerPath: "themeApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getTheme: builder.query<string, void>({
      queryFn: () => {
        const theme = localStorage.getItem("theme") || "dark";
        return { data: theme };
      },
    }),
    toggleTheme: builder.mutation<void, void>({
      queryFn: () => {
        const currentTheme = localStorage.getItem("theme") || "dark";
        const newTheme = currentTheme === "light" ? "dark" : "light";
        localStorage.setItem("theme", newTheme);
        window.dispatchEvent(new Event("storage"));
        return { data: undefined };
      },
    }),
    setTheme: builder.mutation<void, string>({
      queryFn: (newTheme) => {
        localStorage.setItem("theme", newTheme);
        window.dispatchEvent(new Event("storage"));
        return { data: undefined };
      },
    }),
  }),
});

export const { useGetThemeQuery, useToggleThemeMutation, useSetThemeMutation } =
  themeApi;
