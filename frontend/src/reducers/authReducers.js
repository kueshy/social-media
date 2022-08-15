export const authReducer = (
  state = { authData: {}, loading: false, error: false, uploading: false },
  action
) => {
  switch (action.type) {
    case "LOGIN_START":
      return { ...state, loading: true, error: false };
    case "LOGIN_SUCCESS":
      localStorage.setItem("Profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data, loading: false, error: false };
    case "LOGIN_FAIL":
      return { ...state, error: true, laoding: false };

    case "LOG_OUT":
      localStorage.clear();
      return { ...state, authData: null, loading: false, uploading: false };

    default:
      return state;
  }
};
