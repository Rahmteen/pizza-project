import { PizzaOrder } from "@/store/types";

/**
 * @name cleanPizzaOrder
 * @type {Function}
 * @description takes a pizza order with 0 values for ingredients and
 * removes them from the object and returns the result.
 * @returns {Partial<PizzaOrder>}
 */

export const cleanPizzaOrder = (order: PizzaOrder): Partial<PizzaOrder> => {
  const cleanedOrder: Partial<PizzaOrder> = { size: order.size };
  const keys = Object.keys(order) as Array<keyof PizzaOrder>;

  keys.forEach((key) => {
    if (order[key] !== 0 && key !== "size") {
      cleanedOrder[key] = order[key];
    }
  });

  return cleanedOrder;
};
