function CartItem(props) {
  const { mainId, displayName, quantity, price } = props;
  return (
    <li class="collection-item">
      {displayName} x{quantity} = {price * quantity}
      <span class="secondary-content">
        <i class="material-icons basket-delete">close</i>
      </span>
    </li>
  );
}

export default CartItem;
