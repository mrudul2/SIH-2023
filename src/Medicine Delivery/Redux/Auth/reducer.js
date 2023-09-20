import { ERROR, LOADING, SUCCESS } from "./action";
const initState = {
  loading: false,
  error: false,
  isAuth: localStorage.getItem("isAuth") || false,
};
export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOADING: {
      return {
        loading: true,
        error: false,
        isAuth: false,
      };
    }
    case SUCCESS: {
      localStorage.setItem("isAuth", initState.isAuth);
      return {
        loading: false,
        error: false,
        isAuth: payload,
      };
    }
    case ERROR: {
      return {
        loading: false,
        error: true,
        isAuth: false,
      };
    }

    default:
      return state;
  }
};
