import client from './client';

export const getUser = async () => await client('/api/me').then(({ data }) => data).catch(() => null);

export const login = async ({ email, password }) => await client('/api/login', { body: { email, password } }).then(({ data: user, meta: { token } }) => ({ user, token }));

export const logout = async ({ id }) => await client('/api/logout', { body: { id } });

export const register = async ({
  email, name, password, password_confirmation,
}) => await client('/api/register', {
  body: {
    email, name, password, password_confirmation,
  },
}).then(({ data: user, meta: { token } }) => ({ user, token }));

export const forgotPassword = async ({ email }) => await client('/api/password/email', { body: { email } }).then(({ status }) => status);

export const resetPassword = async ({
  token, email, password, password_confirmation,
}) => await client('/api/password/reset', {
  body: {
    token, email, password, password_confirmation,
  },
}).then(({ status }) => status);
