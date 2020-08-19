import React from 'react';
import PropTypes from 'prop-types';
import { formatNumber } from '../../utils/helpers';

OrderItem.propTypes = {
  product: PropTypes.object,
};

export default function OrderItem({ product }) {
  return (
    <div className="row no-gutters py-2">
      <div className="col-sm-2 p-2">
        <img
          alt={product.name}
          style={{ margin: '0 auto', maxHeight: '50px' }}
          src={product.photo}
          className="img-fluid d-block"
        />
      </div>
      <div className="col-sm-6 p-2 text-center text-sm-left">
        <h5 className="mb-1">{product.name}</h5>
        <p className="mb-1">
          Price:
          {formatNumber(product.price)}
        </p>

      </div>
      <div className="col-sm-2 p-2 text-center">
        <p className="mb-0">
          Qty:
          {product.quantity}
        </p>
      </div>
    </div>
  );
}
