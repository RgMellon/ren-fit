import axios from "axios";

const google_api = axios.create({
  baseURL: "https://fitness.googleapis.com/fitness/v1",
});

export { google_api };
