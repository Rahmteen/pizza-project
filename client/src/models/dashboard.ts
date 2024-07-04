import type { RootModel } from "@/store";
import { createModel } from "@rematch/core";
import { DashboardModelState, DashboardState, Order, PizzaIngredientValue, PizzaOrder, PizzaSize } from "@/store/types";
import { defaultDashboardModelState } from "@/store/constants";
import { setPizzaOrderProperty } from "@/utils/setPizzaOrderProperty";

export const dashboardModel = createModel<RootModel>()({
  state: {
    ...defaultDashboardModelState,
  } as DashboardModelState,
  reducers: {
    setCurrentState: (state: DashboardModelState, currentState: DashboardState) => ({ ...state, currentState }),
    setPastOrders: (state: DashboardModelState, pastOrders: Order[]) => ({ ...state, pastOrders }),
    addChatLog: (state: DashboardModelState, chat: string) => ({ ...state, chatlog: [...state.chatlog, chat] }),
    setCurrentMessage: (state: DashboardModelState, currentMessage: string) => ({ ...state, currentMessage }),
    setIsConfirmingOrder: (state: DashboardModelState, isConfirmingOrder: boolean) => ({ ...state, isConfirmingOrder }),
    setPizzaSize: (state: DashboardModelState, size: PizzaSize) => setPizzaOrderProperty(state, "size", size),
    setPizzaCheese: (state: DashboardModelState, cheese: PizzaIngredientValue) =>
      setPizzaOrderProperty(state, "cheese", cheese),
    setPizzaSauce: (state: DashboardModelState, sauce: PizzaIngredientValue) =>
      setPizzaOrderProperty(state, "sauce", sauce),
    setPizzaPepperoni: (state: DashboardModelState, pepperoni: PizzaIngredientValue) =>
      setPizzaOrderProperty(state, "pepperoni", pepperoni),
    setPizzaSausage: (state: DashboardModelState, sausage: PizzaIngredientValue) =>
      setPizzaOrderProperty(state, "sausage", sausage),
    setPizzaMushrooms: (state: DashboardModelState, mushrooms: PizzaIngredientValue) =>
      setPizzaOrderProperty(state, "mushrooms", mushrooms),
    setPizzaOnions: (state: DashboardModelState, onions: PizzaIngredientValue) =>
      setPizzaOrderProperty(state, "onions", onions),
    setPizzaOlives: (state: DashboardModelState, olives: PizzaIngredientValue) =>
      setPizzaOrderProperty(state, "olives", olives),
    setPizzaBacon: (state: DashboardModelState, bacon: PizzaIngredientValue) =>
      setPizzaOrderProperty(state, "bacon", bacon),
    setPizzaPineapple: (state: DashboardModelState, pineapple: PizzaIngredientValue) =>
      setPizzaOrderProperty(state, "pineapple", pineapple),
    clearState: () => ({ ...defaultDashboardModelState }),
  },
  selectors: (slice) => ({
    selectState: () => slice((state: DashboardModelState): DashboardModelState => state),
    selectNewOrder: () => slice((state: DashboardModelState): PizzaOrder => state?.newOrder),
    selectCurrentMessage: () => slice((state: DashboardModelState): string => state?.currentMessage),
    selectCurrentState: () => slice((state: DashboardModelState): DashboardState => state?.currentState),
    selectPastOrders: () => slice((state: DashboardModelState): Order[] => state?.pastOrders),
    selectIsConfirmingOrder: () => slice((state: DashboardModelState): boolean => state?.isConfirmingOrder),
    // stretch
    selectChatlog: () => slice((state: DashboardModelState): string[] => state?.chatlog),
  }),
  effects: () => ({
    async getPastUserOrders(token: string) {},
    async placeUserOrder([token, cart]: [string, PizzaOrder]) {},
    // stretch
    async sendChatMessage([token, message]: [string, string]) {},
  }),
});
