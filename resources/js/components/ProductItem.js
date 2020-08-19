import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Counter from './counter';
import { CartContext } from '../context/CartContext';
import { formatNumber, truncateString } from '../utils/helpers';

const ProductItem = (props) => {
  const [quantity, setQuantity] = useState(1);
  const {
    id, title, cover_img, description, price,
  } = props;
  const product = {
    id, name: title, price, photo: cover_img, quantity,
  };

  const onCount = (qnt) => {
    setQuantity(qnt);
  };

  const { addProduct, cartItems, increase } = useContext(CartContext);
  const isInCart = (product) => !!cartItems.find((item) => item.id === product.id);

  return (
    <div className="card border-0 mb-4 shadow-sm">
      <div className="m-3">
        <img src={cover_img} className="card-img-top mx-2" alt={title} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{truncateString(description, 80)}</p>
        <div className="card-body__pricerow d-flex align-items-center justify-content-between mb-4">
          <span className="card-body__price">{formatNumber(price)}</span>
          <Counter onCount={onCount} product={product} />
        </div>
        <div className="d-flex align-items-center justify-content-end">
          {
            isInCart(product)
            && (
            <button
              onClick={() => increase(product)}
              className="btn btn-block btn-primary"
            >
              Add one more
            </button>
            )
        }

          {
            !isInCart(product)
            && (
            <button
              onClick={() => addProduct(product)}
              className="btn btn-block btn-outline-primary"
            >
              Add to cart
            </button>
            )
        }
        </div>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  id: PropTypes.number,
  cover_img: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  onAdd: PropTypes.func,
};

export default ProductItem;
