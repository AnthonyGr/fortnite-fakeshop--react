import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

export const ShopContext = createContext();

const initialState = {
  goods: [],
  loading: false,
  order: [],
  isCartShow: false,
  alertName: '',
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  value.changeQuantity = (n, itemId) => {
    dispatch({ type: 'CHANGE_QUANTITY', payload: { n: n, id: itemId } });
  };

  value.removeFromCart = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id: itemId } });
  };

  value.handleCartShow = () => {
    dispatch({ type: 'HANDLE_CART_SHOW' });
  };

  value.closeAlert = () => {
    dispatch({ type: 'CLOSE_ALERT' });
  };

  value.setGoods = (data) => {
    dispatch({ type: 'SET_GOODS', payload: data });
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
