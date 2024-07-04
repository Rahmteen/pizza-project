import { DashboardState, PizzaOrder } from "@/store/types";

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

/**
 * @name defaultDashboardModelState
 * @description default state for dashboard model
 * @return {Interface}
 */

export const defaultDashboardModelState = {
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
};
