function CartItem(props) {
  const { mainId, displayName, quantity, price, removeFromCart, changeQuantity } = props;
  return (
    <li class="collection-item">
      {displayName} x{' '}
      <i className="material-icons basket-quantity" onClick={() => changeQuantity(-1, mainId)}>
        remove
      </i>
      {quantity}
      <i className="material-icons basket-quantity" onClick={() => changeQuantity(1, mainId)}>
        add
      </i>{' '}
      = {price * quantity}
      <span class="secondary-content">
        <i class="material-icons basket-delete" onClick={() => removeFromCart(mainId)}>
          close
        </i>
      </span>
    </li>
  );
}

export default CartItem;
