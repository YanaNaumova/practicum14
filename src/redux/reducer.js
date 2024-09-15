import { LOGIN, LOGOUT } from "../redux/actions";

const initialState = {
  user: { name: "", password: "" },
  isAuthenticated: false,
};

const loginLogautReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: { name: action.payload.name, password: action.payload.password },
        isAuthenticated: true,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default loginLogautReducer;
