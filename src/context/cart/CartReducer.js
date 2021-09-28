import * as types from "../Types";

const CartReducer = (state, action) => {
    switch (action.type) {
        case types.ADD_TO_CART: {
            return {
                ...state,
                cartItems: state.cartItems.some((item) => item.id === action.payload.id)
                    ? (
                        state.cartItems.map((item) => {
                            if (item.id === action.payload.id) {
                                item.quantity += action.payload.quantity;
                            }
                            return item;
                        })
                    )
                    : (
                        [...state.cartItems, action.payload]
                    )
            }
        }
        case types.INCREASE_QUANTITY: {
            return {
                ...state,
                cartItems: state.cartItems.map((item) => {
                    if (item.id === action.payload) {
                        item.quantity += 1;
                        return item;
                    }
                    return item;
                })
            }
        }
        case types.DECREASE_QUANTITY: {
            return {
                ...state,
                cartItems: state.cartItems.map((item) => {
                    if (item.id === action.payload) {
                        item.quantity -= 1;
                    }
                    return item;
                })
            }
        }
        case types.CLEAN_CART: {
            return {
                ...state,
                cartItems: []
            }
        }
        case types.REMOVE_ITEM: {
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload)
            }
        }
        default:
            return state;
    }
}


export default CartReducer;