import axios from "axios";
import {
  GET_APPOINTMENTS_ERROR,
  GET_APPOINTMENTS_LOADING,
  GET_APPOINTMENTS_SUCCESS,
  POST_APPOINTMENTS_ERROR,
  POST_APPOINTMENTS_LOADING,
  POST_APPOINTMENTS_SUCCESS,
} from "./appointments.types";

export const getAppointments = (token) => async (dispatch) => {
  dispatch({ type: GET_APPOINTMENTS_LOADING });
  try {
    let response = await axios.get("http://localhost:8080/appointment/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: GET_APPOINTMENTS_SUCCESS, payload: response.data });
    return response.data;
  } catch (e) {
    dispatch({ type: GET_APPOINTMENTS_ERROR });
  }
};

export const addAppointment = (token, appointment) => async (dispatch) => {
  dispatch({ type: POST_APPOINTMENTS_LOADING });
  try {
    await axios.post("http://localhost:8080/appointment/create", appointment, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: POST_APPOINTMENTS_SUCCESS });
  } catch (e) {
    dispatch({ type: POST_APPOINTMENTS_ERROR });
  }
};
