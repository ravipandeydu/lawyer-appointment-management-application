import {
  GET_LAWYERS_ERROR,
  GET_LAWYERS_LOADING,
  GET_LAWYERS_SUCCESS,
  PATCH_LAWYERS_ERROR,
  PATCH_LAWYERS_LOADING,
  PATCH_LAWYERS_SUCCESS,
} from "./lawyers.types";

let initialState = {
  loading: false,
  error: false,
  patchLoading: false,
  data: [],
};

export const lawyersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_LAWYERS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_LAWYERS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case GET_LAWYERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };
    }

    case PATCH_LAWYERS_LOADING: {
      return {
        ...state,
        patchLoading: true,
      };
    }
    case PATCH_LAWYERS_ERROR: {
      return {
        ...state,
        patchLoading: false,
        error: true,
      };
    }
    case PATCH_LAWYERS_SUCCESS: {
      return {
        ...state,
        patchLoading: false,
        error: false,
      };
    }
    default: {
      return state;
    }
  }
};
