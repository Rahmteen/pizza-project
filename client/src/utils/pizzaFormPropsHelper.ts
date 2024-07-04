import { Dispatch } from "redux";
import { DashboardModelState, PizzaSize, PizzaIngredientValue } from "@/store/types";

interface IngredientProps {
  setValue: (value: PizzaIngredientValue) => void;
  value: PizzaIngredientValue;
  name: string;
}

interface SizeProps {
  setValue: (value: PizzaSize) => void;
  value: PizzaSize;
  name: string;
}

/**
 * @name pizzaFormPropsHelper
 * @type {Function}
 * @description takes the current state of an order and handles created the props
 * that will map into form element components.
 * @returns {DashboardModelState}
 */

export function pizzaFormPropsHelper(dispatch: Dispatch, state: DashboardModelState) {
  const pizzaSizeProps: SizeProps = {
    setValue: (el: PizzaSize) => dispatch.dashboardModel.setPizzaSize(el),
    value: state.newOrder.size,
    name: "size",
  };

  const sauceAndCheeseProps: IngredientProps[] = [
    {
      setValue: (el: PizzaIngredientValue) => dispatch.dashboardModel.setPizzaCheese(el),
      value: state.newOrder.cheese,
      name: "cheese",
    },
    {
      setValue: (el: PizzaIngredientValue) => dispatch.dashboardModel.setPizzaSauce(el),
      value: state.newOrder.sauce,
      name: "sauce",
    },
  ];

  const toppingsProps: IngredientProps[] = [
    {
      setValue: (el: PizzaIngredientValue) => dispatch.dashboardModel.setPizzaPineapple(el),
      value: state.newOrder.pineapple,
      name: "pineapple",
    },
    {
      setValue: (el: PizzaIngredientValue) => dispatch.dashboardModel.setPizzaMushrooms(el),
      value: state.newOrder.mushrooms,
      name: "mushrooms",
    },
    {
      setValue: (el: PizzaIngredientValue) => dispatch.dashboardModel.setPizzaOnions(el),
      value: state.newOrder.onions,
      name: "onions",
    },
    {
      setValue: (el: PizzaIngredientValue) => dispatch.dashboardModel.setPizzaOlives(el),
      value: state.newOrder.olives,
      name: "olives",
    },
    {
      setValue: (el: PizzaIngredientValue) => dispatch.dashboardModel.setPizzaPepperoni(el),
      value: state.newOrder.pepperoni,
      name: "pepperoni",
    },
    {
      setValue: (el: PizzaIngredientValue) => dispatch.dashboardModel.setPizzaSausage(el),
      value: state.newOrder.sausage,
      name: "sausage",
    },
    {
      setValue: (el: PizzaIngredientValue) => dispatch.dashboardModel.setPizzaBacon(el),
      value: state.newOrder.bacon,
      name: "bacon",
    },
  ];

  return { pizzaSizeProps, sauceAndCheeseProps, toppingsProps };
}
