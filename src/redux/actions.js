export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const login = (name, password) => ({
  type: LOGIN,
  payload: { name, password },
});

export const logout = () => ({
  type: LOGOUT,
});
