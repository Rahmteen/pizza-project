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

/**
 * @name RegisterModelState
 * @description register model type
 * @return {Interface}
 */

export interface RegisterModelState {
  password: string;
  confirmedPassword: string;
  firstName: string;
  lastName: string;
  email: string;
  isLoading: boolean;
  isError: boolean;
  isShowingPassword: boolean;
  isShowingConfirmedPassword: boolean;
}
