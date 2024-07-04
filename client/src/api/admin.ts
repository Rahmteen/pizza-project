import axios from "axios";

const ADMIN_GET_ALL_LOGS_ENDPOINT = "http://localhost:3000/admin/logs";
const ADMIN_INVITE_USER_ENDPOINT = "http://localhost:3000/admin/invite";
const ADMIN_GET_ALL_ORDERS_ENDPOINT = "http://localhost:3000/admin/orders";

/**
 * @name getAllOrders
 * @description fetches all orders in the databases sorted desc.
 * @param {string} token
 */

export const getAllOrders = async (token: string) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return axios.get(`${ADMIN_GET_ALL_ORDERS_ENDPOINT}`, config);
};

/**
 * @name getAllLogs
 * @description fetches all platform logs.
 * @param {string} token
 */

export const getAllLogs = async (token: string) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return axios.get(`${ADMIN_GET_ALL_LOGS_ENDPOINT}`, config);
};

/**
 * @name inviteUserByEmail
 * @description handles call to invite new user by email
 * @param {string} email
 * @param {string} token
 */

export const inviteUserByEmail = async (email: string, token: string) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return axios.post(
    `${ADMIN_INVITE_USER_ENDPOINT}`,
    {
      email: email,
    },
    config
  );
};
