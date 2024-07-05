import { PizzaOrder, DEFAULT_PIZZA_ORDER } from "../types";

interface OrderState {
  currentStep: number;
  order: PizzaOrder;
}

const orderStates: { [userId: number]: OrderState } = {};

export const initializeOrderState = (userId: number) => {
  orderStates[userId] = {
    currentStep: 0,
    order: { ...DEFAULT_PIZZA_ORDER },
  };
};

export const getOrderState = (userId: number): OrderState => {
  return orderStates[userId];
};

export const updateOrderState = (userId: number, update: Partial<OrderState>) => {
  orderStates[userId] = {
    ...orderStates[userId],
    ...update,
  };
};

export const deleteOrderState = (userId: number) => {
  delete orderStates[userId];
};
