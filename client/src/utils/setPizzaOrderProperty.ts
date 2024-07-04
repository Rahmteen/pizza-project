import { DashboardModelState, PizzaIngredientValue, PizzaOrder, PizzaSize } from "@/store/types";

/**
 * @name setPizzaOrderProperty
 * @type {Function}
 * @description handles setting the correct properties
 * in the PizzaOrder object for the dashboard model state
 * @returns {DashboardModelState}
 */

type PizzaOrderKey = keyof PizzaOrder;

export const setPizzaOrderProperty = (
  state: DashboardModelState,
  key: PizzaOrderKey,
  value: PizzaIngredientValue | PizzaSize
): DashboardModelState => {
  return {
    ...state,
    newOrder: {
      ...state.newOrder,
      [key]: value,
    },
  };
};
