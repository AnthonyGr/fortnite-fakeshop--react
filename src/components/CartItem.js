import { useContext } from 'react';
import { ShopContext } from '../context';

function CartItem(props) {
  const { mainId, displayName, quantity, price } = props;
  const { removeFromCart, changeQuantity } = useContext(ShopContext);

  return (
    <li className="collection-item">
      {displayName} x{' '}
      <i className="material-icons basket-quantity" onClick={() => changeQuantity(-1, mainId)}>
        remove
      </i>
      {quantity}
      <i className="material-icons basket-quantity" onClick={() => changeQuantity(1, mainId)}>
        add
      </i>{' '}
      = {price * quantity}
      <span className="secondary-content">
        <i className="material-icons basket-delete" onClick={() => removeFromCart(mainId)}>
          close
        </i>
      </span>
    </li>
  );
}

export default CartItem;
