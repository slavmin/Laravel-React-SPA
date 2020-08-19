import React, { createContext, useReducer } from 'react';
import { CartReducer, sumItems } from './CartReducer';
import { submitOrder } from '../api/shop';

export const CartContext = createContext();

const storage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
const initialState = { cartItems: storage, ...sumItems(storage), checkout: false };

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const increase = (payload) => {
    dispatch({ type: 'INCREASE', payload });
  };

  const decrease = (payload) => {
    dispatch({ type: 'DECREASE', payload });
  };

  const addProduct = (payload) => {
    dispatch({ type: 'ADD_ITEM', payload });
  };

  const removeProduct = (payload) => {
    dispatch({ type: 'REMOVE_ITEM', payload });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR' });
  };

  const handleCheckout = () => {
    submitOrder({
      cart: state,
    })
      .catch((error) => {
        // eslint-disable-next-line no-undef
        console.error('SUBMIT ERRORS', error);
      });
    // eslint-disable-next-line no-undef
    console.log('CHECKOUT STATE', state);
    dispatch({ type: 'CHECKOUT' });
    setTimeout(() => { dispatch({ type: 'CLEAR' }); }, 4000);
  };

  const contextValues = {
    removeProduct,
    addProduct,
    increase,
    decrease,
    clearCart,
    handleCheckout,
    ...state,
  };

  return (
    <CartContext.Provider value={contextValues}>
      { children }
    </CartContext.Provider>
  );
};

export default CartContextProvider;
