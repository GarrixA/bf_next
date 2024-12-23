import type { Middleware, MiddlewareAPI } from "@reduxjs/toolkit";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { PERSIST_KEY } from "@/utils/config/constants";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import appReducer from "@/store/reducer/app";
import baseAPI from "@/utils/api";
import { themeApi } from "@/store/reducer/themeReducer";

const rootReducer = combineReducers({
  [baseAPI.reducerPath]: baseAPI.reducer,
  [themeApi.reducerPath]: themeApi.reducer,
  appReducer,
});

const persistConfig = {
  key: PERSIST_KEY,
  version: 1,
  storage,
  blacklist: [baseAPI.reducerPath, themeApi.reducerPath, "userReducer"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseAPI.middleware, themeApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);