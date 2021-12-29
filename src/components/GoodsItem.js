import { useContext } from 'react';
import { ShopContext } from '../context';

function GoodsItem(props) {
  // TODO: Переписать деструктуризацию!
  const { mainId, displayName, displayDescription } = props;
  const price = props.price.finalPrice;

  const { addToCart } = useContext(ShopContext);

  return (
    <div className="card" id={mainId}>
      <div className="card-image">
        <img src={props.displayAssets[0].background} alt={displayName} />
      </div>
      <div className="card-content">
        <span className="card-title">{displayName}</span>
        <p>{displayDescription}</p>
      </div>
      <div className="card-action">
        <button className="btn" onClick={() => addToCart({ mainId, displayName, price })}>
          Купить
        </button>
        <span className="right" style={{ fontSize: '1.6rem' }}>
          {price} руб.
        </span>
      </div>
    </div>
  );
}

export default GoodsItem;
