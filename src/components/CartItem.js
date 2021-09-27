import React, { useState } from 'react'
import { connect } from "react-redux";
import {
    adjustQuantity,
    removeFromCart,
} from "../redux/Shopping/shopping-actions";

const CartItem = ({ item, adjustQty, removeFromCart }) => {
    const [input, setInput] = useState(item.quantity);

    const onChangeHandler = (e) => {
        setInput(e.target.value);
        adjustQty(item.id, e.target.value);
    };

    return (
        <div>
            <img
                src={item.image}
                alt={item.title}
            />
            <div>
                <p>{item.title}</p>
                <p>{item.description}</p>
                <p>$ {item.price}</p>
            </div>
            <div>
                <div>
                    <label htmlFor="quantity">Quantity</label>
                    <input
                        min="1"
                        type="number"
                        id="quantity"
                        name="quantity"
                        value={input}
                        onChange={onChangeHandler}
                    />
                </div>
                <button
                    onClick={() => removeFromCart(item.id)}
                >
                    <img
                        src="https://image.flaticon.com/icons/svg/709/709519.svg"
                        alt=""
                    />
                </button>
            </div>
        </div>
    )
}



const mapDispatchToProps = (dispatch) => {
    return {
        adjustQty: (id, value) => dispatch(adjustQuantity(id, value)),
        removeFromCart: (id) => dispatch(removeFromCart(id)),
    };
};

export default connect(null, mapDispatchToProps)(CartItem);
