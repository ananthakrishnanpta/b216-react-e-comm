import "./CartItem.css";

import useCart from "../../../hooks/useCart";
import useCurrency from "../../../hooks/useCurrency";

const CartItem = ({ cartItem }) => {
    const { item, quantity } = cartItem;

    const { updateQuantity, removeFromCart } = useCart();
    const { convertPrice } = useCurrency();

    return (
        <div className="card shadow-sm cart-item mb-3">
            <div className="card-body">
                <div className="row align-items-center g-3">

                    {/* Product Image */}
                    <div className="col-4 col-md-2">
                        <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="img-fluid rounded cart-item-image"
                        />
                    </div>

                    {/* Product Details */}
                    <div className="col-8 col-md-6">
                        <h5 className="cart-item-title">
                            {item.title}
                        </h5>

                        <p className="cart-item-price">
                            {convertPrice(item.price)}
                        </p>

                        <div className="quantity-controls">

                            <button
                                className="btn btn-outline-secondary quantity-btn"
                                onClick={() => updateQuantity(item.id, -1)}
                            >
                                −
                            </button>

                            <span className="quantity-value">
                                {quantity}
                            </span>

                            <button
                                className="btn btn-outline-secondary quantity-btn"
                                onClick={() => updateQuantity(item.id, 1)}
                            >
                                +
                            </button>

                        </div>
                    </div>

                    {/* Subtotal & Remove */}
                    <div className="col-12 col-md-4 text-md-end mt-3 mt-md-0">

                        <h5 className="cart-item-subtotal">
                            {convertPrice(item.price * quantity)}
                        </h5>

                        <button
                            className="btn btn-outline-danger btn-sm remove-btn"
                            onClick={() => removeFromCart(item.id)}
                        >
                            <i className="bi bi-trash me-2"></i>
                            Remove
                        </button>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default CartItem;