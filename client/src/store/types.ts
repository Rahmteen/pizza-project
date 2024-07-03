/**
 * @name LoginModelState
 * @description login model type
 * @return {Interface}
 */

export interface LoginModelState {
  email: string;
  password: string;
  isLoading: boolean;
  isError: boolean;
  isShowingPassword: boolean;
}
