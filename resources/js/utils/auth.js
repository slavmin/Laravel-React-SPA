const authToken = 'auth_token';
const intendedUrl = 'intendedUrl';
const defaultIntendedUrl = '/';

export const getToken = () => localStorage.getItem(authToken);

export const setToken = (token) => {
  token ? localStorage.setItem(authToken, token) : localStorage.removeItem(authToken);
};

export const getIntendedUrl = (user) => (localStorage.getItem(intendedUrl) || user && user.id ? `/profile/${user.id}` : defaultIntendedUrl);

export const setIntendedUrl = (url) => {
  url ? localStorage.setItem(intendedUrl, url) : localStorage.removeItem(intendedUrl);
};
