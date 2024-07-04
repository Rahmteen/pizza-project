import { PizzaSize } from "@/store/types";

/**
 * @name parsePizzaSize
 * @type {Function}
 * @description returns the text value for a pizza's size.
 * @returns {string | undefined}
 */

export const parsePizzaSize = (val: PizzaSize): string | undefined => {
  if (val === "SM") return "small";
  else if (val === "MD") return "medium";
  else if (val === "LG") return "large";
};
