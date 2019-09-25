/* eslint no-console: 0 */
import { name } from '../../package.json';

export const FETCH_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH'
}

export const apiFetch =
  ({ baseUrl, endPoint, method, token = null, body = null, params = null, headers = null }) =>
    new Promise((resolve, reject) => {

      let defaultHeaders = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };

      token && (defaultHeaders['Authorization'] = `Bearer ${token}`);

      const opts = {
        method,
        headers: {
          ...defaultHeaders,
          ...headers
        },
        body: body ? JSON.stringify(body) : null
      };

      const urlParms = params ?
        '?' + Object.keys(params).map(key => key + '=' + params[key]).join('&')
        :
        '';

      const uri = `${baseUrl}${endPoint || ''}${urlParms}`;

      console.log(name + "::api::request", {
        opts,
        uri,
      });

      fetch(uri, opts)
        .then(response => {
          if (response.ok) {
            response.json().then(jsonResponse => {
              console.log(name + '::api::jsonResponse', jsonResponse);
              resolve(jsonResponse);
            }).catch(reject);
          } else {
            response.json()
              .then(errJson => {
                console.log(name + '::api::errJson', errJson);
                reject({ status: response.status, error: ((errJson.error) ? errJson.error : errJson) })
              }).catch(reject);
          }
        })
        .catch((error) => {
          console.log(name + '::api::error', error);
          reject(error);
        });
    });
