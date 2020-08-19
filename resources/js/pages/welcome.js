import React, { useEffect, useState } from 'react';
import { getProducts } from '../api/shop';
import Layout from '../components/Layout';
import ProductItem from '../components/ProductItem';
import FullPageSpinner from '../components/full-page-spinner';
import SmallCart from './cart/SmallCart';

export default function Welcome() {
  const [isLoading, setIsLoading] = useState(true);
  const [, setErrors] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
    .then(({ data }) => setProducts(data))
    .then(() => setIsLoading(false))
    .catch((err) => setErrors(err));
  }, []);

  return (
    <>
      <Layout title="PizzaShop" description="This is the Main page">
        <div className="row mt-5 mb-2">
          {isLoading ? (
            <FullPageSpinner />
          ) : (
            products.map((item, index) => (
              <div className="col-12 col-md-6 col-lg-4" key={index}>
                <ProductItem key={item.id} {...item} />
              </div>
            ))
          )}
        </div>
        <SmallCart />
      </Layout>
    </>
  );
}
