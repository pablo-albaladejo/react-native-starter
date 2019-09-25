import { apiFetch, FETCH_METHODS } from "./api";
import config from "../../config.json";

export const getTest = () => {
  return new Promise((resolve, reject) => {
    apiFetch({
      baseUrl: config.api.baseUrl,
      endPoint: config.api.endpoints.test,
      method: FETCH_METHODS.GET,
      params: {
        apikey: config.api.key,
      }
    })
      .then(res => {
        resolve(res);

      }).catch(e => {
        reject(e)
      })
  })
}
