import store from "@/store";
import { errorActions } from "@/store/error-slice";
import { loadingActions } from "@/store/loading-slice";
import axios, { AxiosError, AxiosResponse } from "axios";
export const authHeader: { Authorization: string } | {} =
  axios.interceptors.request.use((req) => {
    req.headers.Authorization = localStorage.getItem("access_token")
      ? "Bearer " + localStorage.getItem("access_token")
      : null;
    return req;
  });

export const baseURL = process.env.NEXT_PUBLIC_API_BASE_DOMAIN;
axios.defaults.baseURL = baseURL;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.get["Content-Type"] = "application/json";
axios.defaults.headers.delete["Content-Type"] = "application/json";
axios.defaults.headers.put["Content-Type"] = "application/json";
axios.defaults.headers.patch["Content-Type"] = "application/json";
axios.defaults.headers.Accept = "application/json";


axios.interceptors.request.use((req) => {
  store.dispatch(loadingActions.setHasLoading(true));
  return req;
});
axios.interceptors.response.use(
  (response: AxiosResponse) => {
    store.dispatch(loadingActions.setHasLoading(false));
    return response;
  },
  (error: AxiosError) => {
    store.dispatch(loadingActions.setHasLoading(false));
    store.dispatch(
      errorActions.setError({
        message: error.message,
        statusCode: error.response?.status,
      })
    );

    return error;
  }
);
export default axios;
