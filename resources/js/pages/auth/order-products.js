import React from 'react';
import PropTypes from 'prop-types';

import OrderItem from './order-item';

const OrderProducts = ({ products }) => (
  <div className="p-0">
    {
        products.map((product) => <OrderItem key={product.id} product={product} />)
    }
  </div>
);

OrderProducts.propTypes = {
  products: PropTypes.array,
};

export default OrderProducts;
