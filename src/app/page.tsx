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
              <div className=" w-full h-full text-white mt-24">Helloooooow</div>
            </RootLayout>
          </Providers>
        </Provider>
      </main>
    </div>
  );
}
