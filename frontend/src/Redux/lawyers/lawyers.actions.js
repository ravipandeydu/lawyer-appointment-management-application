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
    let response = await axios.get("http://localhost:8080/lawyer", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // let events = response.data.filter((event) => event.userId !== user._id);
    // if (!gameType) {
    dispatch({ type: GET_LAWYERS_SUCCESS, payload: response.data });
    return response.data;
    // } else {
    //   let events = response.data.filter((event) => event.gameType === gameType);
    //   dispatch({ type: GET_LAWYERS_SUCCESS, payload: events });
    //   return response.data;
    // }
  } catch (e) {
    dispatch({ type: GET_LAWYERS_ERROR });
  }
};

export const bookAppointments =
  (token, lawyerId, lawyer) => async (dispatch) => {
    dispatch({ type: PATCH_LAWYERS_LOADING });
    try {
      await axios.patch(
        `http://localhost:8080/lawyer/edit/${lawyerId}`,
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
