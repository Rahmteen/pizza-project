import axios from "axios";

const AUTH_LOGIN_ENDPOINT = "http://localhost:3000/auth/login";
const AUTH_REGISTER_ENDPOINT = "http://localhost:3000/auth/register";

/**
 * @name login
 * @description handles user login
 * @param {string} email
 * @param {string} password
 */

export const login = async (email: string, password: string) => {
  return axios.post(`${AUTH_LOGIN_ENDPOINT}`, {
    email,
    password,
  });
};

/**
 * @name register
 * @description handles token validation + user registration
 * @param {string} firstName
 * @param {string} lastName
 * @param {string} password
 * @param {string} email
 * @param {string} token
 */

export const register = async (firstName: string, lastName: string, password: string, email: string, token: string) => {
  return axios.post(`${AUTH_REGISTER_ENDPOINT}`, {
    firstName,
    lastName,
    password,
    email,
    token,
  });
};
