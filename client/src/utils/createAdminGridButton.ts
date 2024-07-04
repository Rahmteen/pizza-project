import { AdminState, GridButton } from "@/store/types";

/**
 * @name createAdminGridButtons
 * @type {Function}
 * @description handles mapping and returning an array of GridButton items
 * for the admin landing page.
 * @returns {GridButton[]}
 */

export function createAdminGridButtons(dispatchFunction: (state: AdminState) => void): GridButton[] {
  return [
    {
      onClick: () => dispatchFunction(AdminState.INVITE),
      color: "green",
      icon: "fa-solid fa-plus",
      title: "invite user",
    },
    {
      onClick: () => dispatchFunction(AdminState.ORDERS),
      color: "orange",
      icon: "fa-solid fa-list",
      title: "all orders",
    },
    {
      onClick: () => dispatchFunction(AdminState.LOGS),
      color: "gray",
      icon: "fa-solid fa-flask",
      title: "view logs",
    },
  ];
}
