import {
  GET_USER,
  SET_USER,
  SET_USER_TOKEN,
  IS_USER_LOADING,
} from "../actions/actions.js";

export const initialState = {
  user: {},
  userToken: "",
  isLogedIn: false,
  isUserLoading: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case GET_USER: {
      const userToken = window.localStorage.getItem("userToken");
      return {
        ...state,
        userToken: userToken,
      };
    }
    case IS_USER_LOADING: {
      return {
        ...state,
        isUserLoading: action.payload,
      };
    }
    case SET_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case SET_USER_TOKEN: {
      return {
        ...state,
        user: action.payload,
      };
    }

    default:
      return state;
  }
};
