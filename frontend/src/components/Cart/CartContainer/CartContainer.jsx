import "./CartContainer.css";

import useCart from "../../../hooks/useCart";
import CartItem from "../CartItem/CartItem";
import CartSummary from "./CartSummary";

const CartContainer = ({ showSummary = false }) => {
    const { cart } = useCart();

    if (cart.length === 0) {
        return (
            <div className="empty-cart">
                <h3>Your Cart is Empty</h3>
                <p>Add some products to get started.</p>
            </div>
        );
    }

    return (
        <div className="container py-4">
            <div className="row g-4">

                <div className={showSummary ? "col-lg-8" : "col-12"}>
                    {cart.map((cartItem) => (
                        <CartItem
                            key={cartItem.item.id}
                            cartItem={cartItem}
                        />
                    ))}
                </div>

                {showSummary && (
                    <div className="col-lg-4">
                        <CartSummary />
                    </div>
                )}

            </div>
        </div>
    );
};

export default CartContainer;