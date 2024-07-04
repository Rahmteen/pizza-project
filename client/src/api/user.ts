import axios from "axios";
import { PizzaOrder } from "@/store/types";

const USER_CREATE_NEW_ORDER_ENDPOINT = "http://localhost:3000/user/orders";
const USER_GET_PAST_ORDERS_ENDPOINT = "http://localhost:3000/user/order";

/**
 * @name createUserOrder
 * @description handles creating a new user order
 * @param {string} token
 * @param {Partial<PizzaOrder>} cart
 */

export const createUserOrder = async (token: string, cart: Partial<PizzaOrder>) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return axios.post(
    `${USER_CREATE_NEW_ORDER_ENDPOINT}`,
    {
      cart,
    },
    config
  );
};

/**
 * @name getPastUserOrders
 * @description handles fetching past user orders
 * @param {string} token
 */

export const getPastUserOrders = async (token: string) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return axios.get(`${USER_GET_PAST_ORDERS_ENDPOINT}`, config);
};
