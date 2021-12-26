import CartItem from './CartItem';

function CartList(props) {
  const { order = [], handleCartShow, removeFromCart, changeQuantity } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  return (
    <ul class="collection cart-list">
      <li class="collection-item active">Корзина:</li>
      {order.length ? (
        order.map((item) => (
          <CartItem key={item.mainId} removeFromCart={removeFromCart} changeQuantity={changeQuantity} {...item} />
        ))
      ) : (
        <li class="collection-item">Корзина пуста</li>
      )}
      <li class="collection-item active">Общая стоимость: {totalPrice}</li>
      <i class="material-icons basket-close" onClick={handleCartShow}>
        close
      </i>
    </ul>
  );
}

export default CartList;
