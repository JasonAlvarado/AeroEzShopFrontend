import { useReducer } from 'react';
import CartContext from './CartContext';
import CartReducer from './CartReducer';
import * as types from '../Types';

const CartState = ({ children }) => {
    const initialState = {
        cartItems: []
    };

    const [state, dispatch] = useReducer(CartReducer, initialState);

    const addToCart = (item) => {
        dispatch({ type: types.ADD_TO_CART, payload: item });
    }

    const increaseQuantity = (id) => {
        dispatch({ type: types.INCREASE_QUANTITY, payload: id })
    }

    const decreaseQuantity = (id) => {
        dispatch({ type: types.DECREASE_QUANTITY, payload: id })
    }

    const cleanCart = () => {
        dispatch({ type: types.CLEAN_CART })
    }

    const removeItem = (id) => {
        dispatch({ type: types.REMOVE_ITEM, payload: id });
    }

    return (
        <CartContext.Provider
            value={{
                showCart: state.showCart,
                cartItems: state.cartItems,
                addToCart,
                removeItem,
                cleanCart,
                increaseQuantity,
                decreaseQuantity
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartState;