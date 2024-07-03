import type { RootModel } from "@/store";
import { createModel } from "@rematch/core";
import { RegisterModelState } from "@/store/types";
import { defaultRegisterModelState } from "@/store/constants";

export const registerModel = createModel<RootModel>()({
  state: { ...defaultRegisterModelState } as RegisterModelState,
  reducers: {
    setPassword: (state: RegisterModelState, password: string) => ({ ...state, password }),
    setConfirmedPassword: (state: RegisterModelState, confirmedPassword: string) => ({ ...state, confirmedPassword }),
    setEmail: (state: RegisterModelState, email: string) => ({ ...state, email }),
    setIsShowingPassword: (state: RegisterModelState, isShowingPassword: boolean) => ({ ...state, isShowingPassword }),
    setFirstName: (state: RegisterModelState, firstName: string) => ({ ...state, firstName }),
    setLastName: (state: RegisterModelState, lastName: string) => ({ ...state, lastName }),
    setIsLoading: (state: RegisterModelState, isLoading: boolean) => ({ ...state, isLoading }),
    setIsError: (state: RegisterModelState, isError: boolean) => ({ ...state, isError }),
    setIsShowingConfirmedPassword: (state: RegisterModelState, isShowingConfirmedPassword: boolean) => ({
      ...state,
      isShowingConfirmedPassword,
    }),
    clearState: () => ({
      ...defaultRegisterModelState,
    }),
  },
  selectors: (slice) => ({
    selectPassword: () => slice((state: RegisterModelState): string => state?.password),
    selectConfirmedPassword: () => slice((state: RegisterModelState): string => state?.confirmedPassword),
    selectEmail: () => slice((state: RegisterModelState): string => state?.email),
    selectFirstName: () => slice((state: RegisterModelState): string => state?.firstName),
    selectLastName: () => slice((state: RegisterModelState): string => state?.lastName),
    selectIsLoading: () => slice((state: RegisterModelState): boolean => state?.isLoading),
    selectIsError: () => slice((state: RegisterModelState): boolean => state?.isError),
    selectIsShowingPassword: () => slice((state: RegisterModelState): boolean => state?.isShowingPassword),
    selectIsShowingConfirmedPassword: () =>
      slice((state: RegisterModelState): boolean => state?.isShowingConfirmedPassword),
  }),
  effects: (dispatch) => ({
    async handleSignup([firstName, lastName, password, email, token]: [string, string, string, string, string]) {
      // todo: handle signup
    },
  }),
});
