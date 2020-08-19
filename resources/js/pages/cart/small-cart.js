import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { CartIcon } from '../../components/icons';

const SmallCart = () => {
  const { itemCount } = useContext(CartContext);

  return (
    <>
      <div className="small-cart shadow-sm">
        <Link to="/cart" className="btn btn-link">
          <CartIcon width="32px" />
        </Link>
        <span className="badge">{itemCount}</span>
      </div>
    </>
  );
};

export default SmallCart;
