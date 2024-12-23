"use client";

import RootLayout from "@/layout/RootLayout";
import { Provider } from "react-redux";
import { store } from "@/store";

export default function Home() {
  return (
    <div className="">
      <main className="text-4xl font-bold">
        <Provider store={store}>
          <RootLayout children={undefined} />
        </Provider>
      </main>
    </div>
  );
}
