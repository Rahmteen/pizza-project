/**
 * @name defaultLoginModelState
 * @description default state for login model
 * @return {Interface}
 */

export const defaultLoginModelState = {
  email: "",
  password: "",
  isLoading: false,
  isError: false,
  isShowingPassword: false,
};

/**
 * @name defaultRegisterModelState
 * @description default state for register model
 * @return {Interface}
 */

export const defaultRegisterModelState = {
  firstName: "",
  lastName: "",
  password: "",
  confirmedPassword: "",
  email: "",
  isShowingPassword: false,
  isShowingConfirmedPassword: false,
  isLoading: false,
  isError: false,
};
