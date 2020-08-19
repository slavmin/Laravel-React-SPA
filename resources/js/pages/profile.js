import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { getUserOrders } from '../api/shop';
import OrderProducts from './auth/order-products';
import FullPageSpinner from '../components/spinner';
import { formatNumber } from '../utils/helpers';

export default function Profile() {
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getUserOrders()
      .then(({ data }) => setOrders(data))
      .then(() => setIsLoading(false))
      .catch((error) => { throw new Error(error); });
  }, []);

  return (
    <Layout title="PizzaShop" description="This is Profile page">
      <div className="row mt-5">
        <div className="col-12">
          <div className="mb-5">
            <h2 className="mb-0">This is Profile page</h2>
          </div>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-12">
          {isLoading
            ? <FullPageSpinner />
            : (!orders.length ? <h5>Sorry, you have no orders yet.</h5>
              : orders.map((item, index) => (
                <div className="card border-0 shadow-sm mb-3" key={index}>
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between">
                      <h6>
                        Order:
                        <span>
                          {' '}
                          {item.created_at}
                        </span>
                      </h6>
                      <h6>
                        Total Items:
                        <strong>
                          {' '}
                          {item.cart.itemCount}
                        </strong>
                      </h6>
                    </div>
                    <hr className="my-3" />
                    <OrderProducts products={item.cart.cartItems} />
                    <hr className="my-3" />
                    <div className="d-flex align-items-center justify-content-between">
                      {item.cart.deliveryCost
                        && (
                        <h6>
                          Delivery:
                          <strong>
                            {' '}
                            {formatNumber(item.cart.deliveryCost)}
                          </strong>
                        </h6>
                        )}
                      <h6>
                        Total Cost:
                        <strong>
                          {' '}
                          {formatNumber(item.cart.total)}
                        </strong>
                      </h6>
                    </div>
                  </div>
                </div>
              ))
            )}
        </div>
      </div>
    </Layout>
  );
}
