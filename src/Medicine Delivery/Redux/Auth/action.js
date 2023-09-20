export const LOADING = "LOADING";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";

export const getLoading = () => {
  return {
    type: LOADING,
  };
};
export const getSuccess = (data) => {
  return {
    type: SUCCESS,
    payload: data,
  };
};
export const getError = () => {
  return {
    type: ERROR,
  };
};
