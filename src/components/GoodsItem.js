function GoodsItem(props) {
  // TODO: Переписать деструктуризацию!
  const { mainId, displayName, displayDescription } = props;

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
        <button className="btn">Купить</button>
        <span className="right" style={{ fontSize: '1.6rem' }}>
          {props.price.finalPrice} руб.
        </span>
      </div>
    </div>
  );
}

export default GoodsItem;
