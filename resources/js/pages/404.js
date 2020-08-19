import React from 'react';
import Layout from '../components/Layout';
import SmallCart from './cart/SmallCart';

export default function NotFound() {
  return (
    <Layout title="PizzaShop" description="This is Profile page">
      <div className="row mt-5 mb-2">
        <div className="col-12">
          <div className="card border-0 shadow-sm mb-5">
            <div className="card-body">
              <h1 className="mb-2">Sorry, that page isn’t here.</h1>
              <p className="text-grey-dark">You didn’t do anything wrong. We may have moved the page you’re looking for somewhere else.</p>
            </div>
          </div>
        </div>
      </div>
      <SmallCart />
    </Layout>
  );
}
