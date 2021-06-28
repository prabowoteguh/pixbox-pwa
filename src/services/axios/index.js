import axios from "axios";

import errorResponseHandler from "./errorResponseHandler";

const instance = axios.create({
  baseURL: `${process.env.REACT_BACKEND_HOST}`,
});

instance.interceptors.response.use((response) => response, errorResponseHandler);

export default instance;
