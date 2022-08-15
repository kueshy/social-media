import * as AuthApi from "../api/AuthRequest";

export const login = (formData) => async (dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const { data } = await AuthApi.login(formData);
    dispatch({ type: "LOGIN_SUCCESS", data: data });
  } catch (error) {
    console.log(error.message);
    dispatch({ type: "LOGIN_FAIL" });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: "LOG_OUT" });
};
