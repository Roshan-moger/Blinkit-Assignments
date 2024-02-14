import axios from "axios";

import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "../actionType";
import { API_BASE_URL } from "./config";




// Register action creators
const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user });
const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });

export const register = (userData) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
    const user = response.data;
    if (user.jwt) localStorage.setItem("jwt", user.jwt);
    console.log("registerr :- ", user);
    dispatch(registerSuccess(user));
  } catch (error) {
    console.log("error ", error);
    if (error.response && error.response.data && error.response.data.message) {
      // Check if the error message indicates an existing email
      if (error.response.data.message.toLowerCase().includes("email")) {
        dispatch(registerFailure("Email already exists."));
      } else {
        dispatch(registerFailure(error.response.data.message));
      }
    } else {
      dispatch(registerFailure(error.message));
    }
  }
};

// Login action creators
const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

export const login = (userData) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signin`, userData);
    const user = response.data;
    if (user.jwt) localStorage.setItem("jwt", user.jwt);
    console.log("login ", user);
    dispatch(loginSuccess(user));
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      // Check if the error message indicates an issue with credentials
      if (error.response.data.message.toLowerCase().includes("credentials")) {
        dispatch(loginFailure("Invalid email or password."));
      } else {
        dispatch(loginFailure(error.response.data.message));
      }
    } else {
      dispatch(loginFailure(error.message));
    }
  }
};

// ... rest of your action creators




//  get user from token
export const getUser = (token) => {
  return async (dispatch) => {
    dispatch({ type: GET_USER_REQUEST });
    try {
      const response = await axios.get(`${API_BASE_URL}/api/users/profile`,{
        headers:{
          "Authorization":`Bearer ${token}`
        }
      });
      const user = response.data;
      dispatch({ type: GET_USER_SUCCESS, payload: user });
      console.log("req User ",user)
    } catch (error) {
      const errorMessage = error.message;
      dispatch({ type: GET_USER_FAILURE, payload: errorMessage });
    }
  };
};

export const logout = (token) => {
    return async (dispatch) => {
      dispatch({ type: LOGOUT });
      localStorage.clear();
    };
  };