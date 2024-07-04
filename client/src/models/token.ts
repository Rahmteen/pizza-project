import type { RootModel } from "@/store";
import { createModel } from "@rematch/core";
import { defaultTokenModelState } from "@/store/constants";
import { TokenModelState } from "@/store/types";

export const tokenModel = createModel<RootModel>()({
  state: { ...defaultTokenModelState } as TokenModelState,
  reducers: {
    setToken: (state: TokenModelState, token: string) => ({ ...state, token }),
    setIsAdmin: (state: TokenModelState, isAdmin: boolean) => ({ ...state, isAdmin }),
    clearState: () => ({ ...defaultTokenModelState }),
  },
  selectors: (slice) => ({
    selectToken: () => slice((state: TokenModelState): string => state?.token),
    selectIsAdmin: () => slice((state: TokenModelState): boolean => state?.isAdmin),
  }),
  effects: () => ({
    async void() {},
  }),
});
