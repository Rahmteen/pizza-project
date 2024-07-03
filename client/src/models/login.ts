import type { RootModel } from "@/store";
import { LoginModelState } from "@/store/types";
import { createModel } from "@rematch/core";
import { defaultLoginModelState } from "@/store/constants";

export const loginModel = createModel<RootModel>()({
  state: { ...defaultLoginModelState } as LoginModelState,
  reducers: {
    setEmail: (state: LoginModelState, email: string) => ({ ...state, email }),
    setPassword: (state: LoginModelState, password: string) => ({ ...state, password }),
    setIsLoading: (state: LoginModelState, isLoading: boolean) => ({ ...state, isLoading }),
    setIsError: (state: LoginModelState, isError: boolean) => ({ ...state, isError }),
    setIsShowingPassword: (state: LoginModelState, isShowingPassword: boolean) => ({ ...state, isShowingPassword }),
    clearState: () => ({ ...defaultLoginModelState }),
  },
  selectors: (slice) => ({
    selectIsShowingPassword: () => slice((state: LoginModelState) => state.isShowingPassword),
    selectPassword: () => slice((state: LoginModelState): string => state?.password),
    selectEmail: () => slice((state: LoginModelState): string => state?.email),
    selectIsLoading: () => slice((state: LoginModelState): boolean => state?.isLoading),
    selectIsError: () => slice((state: LoginModelState): boolean => state?.isError),
  }),
  effects: () => ({
    async handleLogin([email, password]: [string, string]) {
      // todo
    },
  }),
});
