import {
  AdminModelState,
  AdminState,
  DashboardModelState,
  DashboardState,
  LoginModelState,
  PizzaOrder,
  RegisterModelState,
  TokenModelState,
} from "@/store/types";

/**
 * @name defaultLoginModelState
 * @description default state for login model
 * @return {LoginModelState}
 */

export const defaultLoginModelState: LoginModelState = {
  email: "",
  password: "",
  isLoading: false,
  isError: false,
  isShowingPassword: false,
};

/**
 * @name defaultRegisterModelState
 * @description default state for register model
 * @return {RegisterModelState}
 */

export const defaultRegisterModelState: RegisterModelState = {
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

/**
 * @name defaultDashboardModelState
 * @description default state for dashboard model
 * @return {DashboardModelState}
 */

export const defaultDashboardModelState: DashboardModelState = {
  currentState: DashboardState.DEFAULT,
  pastOrders: [],
  newOrder: {
    size: "SM",
    cheese: 1,
    sauce: 1,
    pepperoni: 0,
    sausage: 0,
    mushrooms: 0,
    onions: 0,
    olives: 0,
    bacon: 0,
    pineapple: 0,
  } as PizzaOrder,
  isConfirmingOrder: false,
  chatlog: [],
  currentMessage: "",
  isLoading: false, 
};

/**
 * @name defaultTokenModelState
 * @description default state for token model
 * @return {TokenModelState}
 */

export const defaultTokenModelState: TokenModelState = {
  token: "",
  isAdmin: false,
};

/**
 * @name defaultAdminModelState
 * @description default state for token model
 * @return {TokenModelState}
 */

export const defaultAdminModelState: AdminModelState = {
  email: "",
  allOrders: [],
  allLogs: [],
  currentState: AdminState.DEFAULT,
};
