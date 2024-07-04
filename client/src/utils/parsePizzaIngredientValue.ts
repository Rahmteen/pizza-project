import { PizzaIngredientValue } from "@/store/types";

/**
 * @name parsePizzaIngredientValue
 * @type {Function}
 * @description returns the text value for a pizza ingredient
 * @returns {string | undefined}
 */

export const parsePizzaIngredientValue = (val: PizzaIngredientValue): string | undefined => {
  if (val === 0) return;
  else if (val === 1) return "regular";
  else if (val === 2) return "extra";
};
