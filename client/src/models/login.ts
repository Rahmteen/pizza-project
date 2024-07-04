import type { RootModel } from "@/store";
import { LoginModelState } from "@/store/types";
import { createModel } from "@rematch/core";
import { defaultLoginModelState } from "@/store/constants";
import { login } from "@/api/auth";

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
  effects: (dispatch) => ({
    async handleLogin([email, password]: [string, string]) {
      try {
        const res = await login(email, password);
        if (res.data) {
          this.setIsLoading(false);
          this.clearState();
          dispatch.tokenModel.setIsAdmin(res.data?.isAdmin || false);
          dispatch.tokenModel.setToken(res.data?.token);
        }
      } catch {
        this.setIsLoading(false);
        this.setIsError(true);
        setTimeout(() => {
          this.setIsError(false);
        }, 2000);
      }
    },
  }),
});
