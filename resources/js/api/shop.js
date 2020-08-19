import client from './client';

export const getProducts = async () => await client('/api/products').then((data) => data).catch(() => null);

export const submitOrder = async ({
  cart, full_name, address, delivery_cost,
}) => await client('/api/orders', {
  body: {
    cart, full_name, address, delivery_cost,
  },
}).then(({ data }) => data);

export const getUserOrders = async () => await client('/api/orders').then((data) => data).catch(() => null);
