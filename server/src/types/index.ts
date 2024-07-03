import { Request } from "express";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdAt: Date;
  role: string;
  validated: Boolean;
  orders: Order[];
}

export interface Order {
  id: number;
  userId: number;
  cart: PizzaOrder[];
  createdAt: Date;
}

export type PizzaSize = "SM" | "MD" | "LG";
export type PizzaIngredientValue = 0 | 1 | 2;

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

export const DEFAULT_PIZZA_ORDER: PizzaOrder = {
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
};

export interface AuthRequest extends Request {
  // * todo
  user?: any;
}
