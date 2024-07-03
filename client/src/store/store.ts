import { init, RematchDispatch, RematchRootState } from "@rematch/core";
import { models, RootModel } from ".";
import persistPlugin from "@rematch/persist";
import storage from "redux-persist/lib/storage";
import selectPlugin from "@rematch/select";

const persistConfig = {
  key: "root",
  storage,
  version: 2,
//   whitelist: [], ** todo: handle token presist
};

export const store = init<RootModel>({
  models,
  plugins: [selectPlugin(), persistPlugin(persistConfig)],
  redux: {
    devtoolOptions: {
      disabled: process.env.NODE_ENV !== "development",
    },
  },
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
