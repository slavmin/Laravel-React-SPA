import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../context/CartContext';
import Layout from '../components/Layout';
import CartProducts from './cart/cart-products';
import { formatNumber } from '../utils/helpers';

const Cart = () => {
  const {
    total, cartItems, itemCount, deliveryCost, checkout, clearCart, handleCheckout,
  } = useContext(CartContext);

  return (
    <Layout title="Cart" description="This is the Cart page">
      <>
        <div className="row mt-5">
          <div className="col-12">
            <div className="text-center">
              <h1>Cart</h1>
            </div>
          </div>
        </div>

        <div className="row no-gutters justify-content-center">
          <div className="col-sm-9 p-3">
            {
                cartItems.length > 0 && <CartProducts />
            }

            {
                cartItems.length === 0 && !checkout
                  ? (
                    <div className="p-3 text-center text-muted">
                      <p className="mb-3">Your cart is empty</p>
                      <Link to="/" className="btn btn-outline-success btn-sm">BUY SOMETHING</Link>
                    </div>
                  )
                  : ''
            }

            { checkout
                && (
                <div className="p-3 text-center text-success">
                  <h3 className="mb-3">Checkout successfull!</h3>
                  <Link to="/" className="btn btn-outline-success btn-sm">BUY MORE</Link>
                </div>
                )}
          </div>
          {
                cartItems.length > 0
                && (
                <div className="col-sm-3 p-3">
                  <div className="card card-body">
                    <p className="mb-1">Total Items</p>
                    <h4 className=" mb-3 txt-right">{itemCount}</h4>
                    <p className="mb-1">Delivery cost</p>
                    <h4 className=" mb-3 txt-right">{formatNumber(deliveryCost)}</h4>
                    <p className="mb-1">Total Payment</p>
                    <h3 className="m-0 txt-right">{formatNumber(total)}</h3>
                    <hr className="my-4" />
                    <div className="text-center">
                      <button type="button" className="btn btn-primary mb-2" onClick={handleCheckout}>CHECKOUT</button>
                      <button type="button" className="btn btn-outlineprimary btn-sm" onClick={clearCart}>CLEAR</button>
                    </div>

                  </div>
                </div>
                )
            }

        </div>
      </>
    </Layout>
  );
};

export default Cart;
