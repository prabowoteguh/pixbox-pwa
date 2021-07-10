import axios from "axios";

import errorResponseHandler from "./errorResponseHandler";

const backendHost = "https://staging.pixbox.id/";

const instance = axios.create({
  baseURL: backendHost,
});

instance.interceptors.response.use((response) => response, errorResponseHandler);

export default instance;
