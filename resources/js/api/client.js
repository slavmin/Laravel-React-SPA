import 'whatwg-fetch';
import { getToken } from '../utils/auth';

function Client(endpoint, { method, body, ...customConfig } = {}) {
  const token = getToken();

  const headers = {
    'content-type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  method = method || (body ? 'POST' : 'GET');

  const config = {
    method,
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  return window
    .fetch(endpoint, config)
    .then((r) => {
      if (r.status >= 200 && r.status < 300) {
        return r.json();
      }

      return Promise.reject(r);
    })
    .catch((error) => Promise.reject(error));
}

export default Client;
