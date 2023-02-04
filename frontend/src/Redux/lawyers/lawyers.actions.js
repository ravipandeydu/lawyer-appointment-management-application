import axios from "axios";
import {
  GET_LAWYERS_ERROR,
  GET_LAWYERS_LOADING,
  GET_LAWYERS_SUCCESS,
  PATCH_LAWYERS_ERROR,
  PATCH_LAWYERS_LOADING,
  PATCH_LAWYERS_SUCCESS,
} from "./lawyers.types";

export const getLawyers = (token) => async (dispatch) => {
  dispatch({ type: GET_LAWYERS_LOADING });
  try {
    let response = await axios.get("https://lawyer-appointment.onrender.com/lawyer", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: GET_LAWYERS_SUCCESS, payload: response.data });
    return response.data;
  } catch (e) {
    dispatch({ type: GET_LAWYERS_ERROR });
  }
};

export const bookAppointments =
  (token, lawyerId, lawyer) => async (dispatch) => {
    dispatch({ type: PATCH_LAWYERS_LOADING });
    try {
      await axios.patch(
        `https://lawyer-appointment.onrender.com/lawyer/edit/${lawyerId}`,
        lawyer,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({ type: PATCH_LAWYERS_SUCCESS });
    } catch (e) {
      dispatch({ type: PATCH_LAWYERS_ERROR });
    }
  };
