import axios from "axios";
import {
  AUTH_LOGIN_ERROR,
  AUTH_LOGIN_LOADING,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
  AUTH_SIGNUP_ERROR,
  AUTH_SIGNUP_LOADING,
  AUTH_SIGNUP_SUCCESS,
} from "./auth.types";

export const loginSuccess = (creds) => async (dispatch) => {
  dispatch({ type: AUTH_LOGIN_LOADING });
  try {
    await axios
      .post("https://lawyer-appointment.onrender.com/user/login", creds)
      .then((data) => {
        console.log(data);
        if (data.data.error) {
          dispatch({ type: AUTH_LOGIN_ERROR, payload: data.data.error });
        } else {
          dispatch({ type: AUTH_LOGIN_SUCCESS, payload: data.data });
        }
        return data;
      });
  } catch (e) {
    dispatch({ type: AUTH_LOGIN_ERROR });
  }
};

export const signupSuccess = (creds) => async (dispatch) => {
  dispatch({ type: AUTH_SIGNUP_LOADING });
  try {
    await axios
      .post("https://lawyer-appointment.onrender.com/user/signup", creds)
      .then((data) => {
        console.log(data);
        if (data.data.error) {
          dispatch({ type: AUTH_SIGNUP_ERROR, payload: data.data.error });
        } else {
          dispatch({ type: AUTH_SIGNUP_SUCCESS, payload: data.data.message });
        }
        return data;
      });
  } catch (e) {
    dispatch({ type: AUTH_SIGNUP_ERROR, payload: "Server Error" });
  }
};

const handleLogout = () => ({
  type: AUTH_LOGOUT,
});

export const logout = () => (dispatch) => {
  dispatch(handleLogout());
};
