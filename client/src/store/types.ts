/**
 * @name Log
 * @description internal logs created by interactions
 * @return {Interface}
 */

export interface Log {
  id: number;
  type: "ERROR" | "ADMIN" | "USER";
  description: string;
  createdAt: string;
}

/**
 * @name Order
 * @description orders returned from db
 * @return {Interface}
 */

export interface Order {
  userId: number;
  createdAt: string;
  id: number;
  cart: PizzaOrder;
}

/**
 * @name PizzaOrder
 * @description pizza orders made by users
 * @return {Interface}
 */

export interface PizzaOrder {
  size: PizzaSize;
  cheese: PizzaIngredientValue;
  sauce: PizzaIngredientValue;
  pepperoni: PizzaIngredientValue;
  sausage: PizzaIngredientValue;
  mushrooms: PizzaIngredientValue;
  onions: PizzaIngredientValue;
  olives: PizzaIngredientValue;
  bacon: PizzaIngredientValue;
  pineapple: PizzaIngredientValue;
}

export type PizzaSize = "SM" | "MD" | "LG";
export type PizzaIngredientValue = 0 | 1 | 2;

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

/**
 * @name DashboardModelState
 * @description dashboard model type
 * @return {Interface}
 */

export interface DashboardModelState {
  currentState: DashboardState;
  pastOrders: Order[];
  newOrder: PizzaOrder;
  isConfirmingOrder: boolean;
  chatlog: string[];
  currentMessage: string;
}

/**
 * @name DashboardState
 * @description dashboard page state for screens
 * @return {Interface}
 */

export enum DashboardState {
  DEFAULT = 0,
  NEW_ORDER,
  CHAT_ORDER,
  PAST_ORDERS,
  SUCCESS,
}

/**
 * @name GridButton
 * @description buttons on dashboard/admin landing page
 * @return {Interface}
 */

export interface GridButton {
  onClick: () => void;
  color: string;
  icon: string;
  title: string;
}
