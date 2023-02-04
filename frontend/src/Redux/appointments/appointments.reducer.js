import {
  GET_APPOINTMENTS_ERROR,
  GET_APPOINTMENTS_LOADING,
  GET_APPOINTMENTS_SUCCESS,
  POST_APPOINTMENTS_ERROR,
  POST_APPOINTMENTS_LOADING,
  POST_APPOINTMENTS_SUCCESS,
} from "./appointments.types";

let initialState = {
  loading: false,
  error: false,
  data: [],
};

export const appointmentsReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case GET_APPOINTMENTS_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case GET_APPOINTMENTS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case GET_APPOINTMENTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };
    }

    case POST_APPOINTMENTS_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case POST_APPOINTMENTS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case POST_APPOINTMENTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }
    default: {
      return state;
    }
  }
};
