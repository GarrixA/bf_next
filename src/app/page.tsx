"use client";

import { Provider } from "react-redux";
import { store } from "@/store";
import { Providers } from "./Providers";
import RootLayout from "@/layout/RootLayout";

export default function Home() {
  return (
    <div className="">
      <main className="text-4xl font-bold">
        <Provider store={store}>
          <Providers>
            <RootLayout>
              <div className=" w-full h-full mt-24 text-black dark:text-white px-10">
                Helloooooow
              </div>
            </RootLayout>
          </Providers>
        </Provider>
      </main>
    </div>
  );
}
