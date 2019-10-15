import { apiFetch, FETCH_METHODS } from "./api";
import config from "../../config.json";

export const postLogin = ({userID, password}) => {
  return new Promise((resolve, reject) => {
    apiFetch({
      baseUrl: config.api.baseUrl,
      endPoint: config.api.endpoints.login,
      method: FETCH_METHODS.POST,
      params: {
        userID,
        password
      }
    })
      .then(res => {
        resolve(res);

      }).catch(e => {
        reject(e)
      })
  })
}
