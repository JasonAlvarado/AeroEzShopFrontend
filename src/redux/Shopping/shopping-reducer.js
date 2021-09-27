import * as actionTypes from './shopping-types';

const INITIAL_STATE = {
    products: [
        {
            id: 1,
            name: "prod 1",
            photo: "https://challenge-api.aerolab.co/static/products/7790040929906.jpg",
            price: 12.34,
            originalPrice: 15.45
        },
        {
            id: 2,
            name: "prod 2",
            photo: "https://challenge-api.aerolab.co/static/products/7790040929906.jpg",
            price: 12.34,
            originalPrice: 15.45
        },
        {
            id: 3,
            name: "prod 3",
            photo: "https://challenge-api.aerolab.co/static/products/7790040929906.jpg",
            price: 12.34,
            originalPrice: 15.45
        },
        {
            id: 4,
            name: "prod 3",
            photo: "https://challenge-api.aerolab.co/static/products/7790040929906.jpg",
            price: 12.34,
            originalPrice: 15.45
        }
    ],//id,title,price,originalPrice
    cart: [],//id,title,price,originalPrice, quantity
    currentItem: null
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case actionTypes.ADD_TO_CART:
        // Great Item data from products array
        const item = state.products.find(
          (product) => product.id === action.payload.id
        );
        // Check if Item is in cart already
        const inCart = state.cart.find((item) =>
          item.id === action.payload.id ? true : false
        );
  
        return {
          ...state,
          cart: inCart
            ? state.cart.map((item) =>
                item.id === action.payload.id
                  ? { ...item, qty: item.qty + 1 }
                  : item
              )
            : [...state.cart, { ...item, qty: 1 }],
        };
      case actionTypes.REMOVE_FROM_CART:
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
        };
      case actionTypes.ADJUST_QUANTITY:
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: +action.payload.qty }
              : item
          ),
        };
      case actionTypes.LOAD_CURRENT_ITEM:
        return {
          ...state,
          currentItem: action.payload,
        };
      default:
        return state;
    }
  };
// const shopReducer = (state = INITIAL_STATE, action) => {
//     switch (action.type) {
//         case actionTypes.ADD_TO_CART:
//             // get the items data from the products array
//             const item = state.products.find(prod => prod.id === action.payload.id);
//             // check if item is already in the art
//             const inCart = this.state.cart.find(item =>
//                 item.id === action.payload.id ? true : false
//             );

//             return {
//                 ...state,
//                 cart: inCart ?
//                     state.cart.map(item =>
//                         item.id === action.payload.id ?
//                             { ...item, quantity: item.quantity + 1 }
//                             : item) :
//                     [...state.cart, { ...item, quantity: 1 }]
//             }
//         case actionTypes.REMOVE_FROM_CART:
//             return {
//                 ...state,
//                 cart: state.cart.filter((item) => item.id !== action.payload.id),
//             };
//         case actionTypes.ADJUST_QUANTITY:
//             return {
//                 ...state,
//                 cart: state.cart.map((item) =>
//                     item.id === action.payload.id
//                         ? { ...item, qty: +action.payload.qty }
//                         : item
//                 ),
//             };
//         case actionTypes.LOAD_CURRENT_ITEM:
//             return {
//                 ...state,
//                 currentItem: action.payload,
//             };
//         default:
//             return state;
//     }
// }

export default shopReducer;