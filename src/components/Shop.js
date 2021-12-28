import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';

import Preloader from './Preloader';
import GoodsList from './GoodsList';
import Cart from './Cart';
import CartList from './CartList';
import Alert from './Alert';

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isCartShow, setCartShow] = useState(false);
  const [alertName, setAlertName] = useState('');

  function addToCart(item) {
    const itemIndex = order.findIndex((orderItem) => orderItem.mainId === item.mainId);
    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
    setAlertName(item.displayName);
  }

  function changeQuantity(n, itemId) {
    const newOrder = order.map((orderItem) => {
      if (orderItem.mainId === itemId) {
        const newQuantity = orderItem.quantity + n;
        return {
          ...orderItem,
          quantity: newQuantity >= 0 ? newQuantity : 0,
        };
      } else {
        return orderItem;
      }
    });
    setOrder(newOrder);
  }

  function removeFromCart(itemId) {
    const newOrder = order.filter((el) => el.mainId !== itemId);
    setOrder(newOrder);
  }

  const handleCartShow = () => {
    setCartShow(!isCartShow);
  };

  const closeAlert = () => {
    setAlertName('');
  };

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      //Проверяем, что ответ пришел и сохраняем в goods
      .then((data) => {
        data.shop && setGoods(data.shop);
        setLoading(false);
      });
  }, []);

  return (
    <main className="container content">
      <Cart quantity={order.length} handleCartShow={handleCartShow} />
      {loading ? <Preloader /> : <GoodsList goods={goods} addToCart={addToCart} />}
      {isCartShow && (
        <CartList
          order={order}
          handleCartShow={handleCartShow}
          removeFromCart={removeFromCart}
          changeQuantity={changeQuantity}
        />
      )}
      {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
    </main>
  );
}

export default Shop;
