export function reducer(state, { type, payload }) {
  switch (type) {
    case 'SET_GOODS':
      return {
        ...state,
        goods: payload || [],
        loading: false,
      };
    case 'ADD_TO_CART': {
      const itemIndex = state.order.findIndex((orderItem) => orderItem.mainId === payload.mainId);
      let newOrder = null;
      if (itemIndex < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        };
        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((orderItem, index) => {
          if (index === itemIndex) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            };
          } else {
            return orderItem;
          }
        });
      }
      return {
        ...state,
        order: newOrder,
        alertName: payload.displayName,
      };
    }
    case 'CHANGE_QUANTITY':
      return {
        ...state,
        order: state.order.map((orderItem) => {
          if (orderItem.mainId === payload.id) {
            const newQuantity = orderItem.quantity + payload.n;
            return {
              ...orderItem,
              quantity: newQuantity >= 0 ? newQuantity : 0,
            };
          } else {
            return orderItem;
          }
        }),
      };
    case 'HANDLE_CART_SHOW':
      return {
        ...state,
        isCartShow: !state.isCartShow,
      };
    case 'CLOSE_ALERT':
      return {
        ...state,
        alertName: '',
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        order: state.order.filter((el) => el.mainId !== payload.id),
      };

    default:
      return state;
  }
}
