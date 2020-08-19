import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { CartContext } from '../context/CartContext';

const Counter = (props) => {
  const { onCount, product } = props;
  const [value, setValue] = useState(1);

  const { cartItems } = useContext(CartContext);
  const isInCart = (product) => !!cartItems.find((item) => item.id === product.id);

  useEffect(() => {
    onCount(value);
  }, [value]);

  const handleChange = (e) => {
    !+e.target.value >= 1 || +e.target.value > 100 ? setValue(1) : setValue(parseInt(e.target.value, 10));
  };
  const decrement = () => {
    +value > 1 ? setValue(+value - 1) : setValue(1);
  };
  const increment = () => {
    +value < 100 ? setValue(+value + 1) : setValue(value);
  };

  return (
    <>
      <div className={`input-group count-group${isInCart(product) ? ' d-none' : ''}`}>
        <button onClick={decrement} type="button" className="btn-number btn-minus" disabled={value <= 1}>
          -
        </button>
        <input onChange={handleChange} type="text" name="count" className="form-control input-number" value={value} />
        <button onClick={increment} type="button" className="btn-number btn-plus" disabled={value >= 100}>
          +
        </button>
      </div>
    </>
  );
};

Counter.propTypes = {
  onCount: PropTypes.func,
  product: PropTypes.object,
};

export default Counter;
