import { DashboardState, GridButton } from "@/store/types";

/**
 * @name createDashboardGridButtons
 * @type {Function}
 * @description handles mapping and returning an array of GridButton items
 * for the dashboard landing page.
 * @returns {GridButton[]}
 */

export function createDashboardGridButtons(dispatchFunction: (state: DashboardState) => void): GridButton[] {
  return [
    {
      onClick: () => dispatchFunction(DashboardState.NEW_ORDER),
      color: "green",
      icon: "fa-solid fa-plus",
      title: "new order",
    },
    {
      onClick: () => dispatchFunction(DashboardState.CHAT_ORDER),
      color: "orange",
      icon: "fa-solid fa-microchip-ai",
      title: "order with chat",
    },
    {
      onClick: () => dispatchFunction(DashboardState.PAST_ORDERS),
      color: "gray",
      icon: "fa-solid fa-list",
      title: "past orders",
    },
  ];
}
