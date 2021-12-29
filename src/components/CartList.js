import { useContext } from 'react';
import { ShopContext } from '../context';

import CartItem from './CartItem';

function CartList() {
  const { order = [], handleCartShow } = useContext(ShopContext);

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  return (
    <ul className="collection cart-list">
      <li className="collection-item active">Корзина:</li>
      {order.length ? (
        order.map((item) => <CartItem key={item.mainId} {...item} />)
      ) : (
        <li className="collection-item">Корзина пуста</li>
      )}
      <li className="collection-item active">
        Общая стоимость: {totalPrice}
        <button className="secondary-content btn-small">Оформить</button>
      </li>
      <i className="material-icons basket-close" onClick={handleCartShow}>
        close
      </i>
    </ul>
  );
}

export default CartList;
