import useCart from "../../../hooks/useCart";
import useCurrency from "../../../hooks/useCurrency";

const CartSummary = () => {
    const { totalItems, totalPrice } = useCart();
    const { convertPrice } = useCurrency();

    return (
        <div className="card shadow-sm cart-summary sticky-top">
            <div className="card-body">

                <h4 className="summary-title">
                    Order Summary
                </h4>

                <div className="summary-row">
                    <span>Total Items</span>
                    <strong>{totalItems}</strong>
                </div>

                <div className="summary-row">
                    <span>Subtotal</span>
                    <strong>{convertPrice(totalPrice)}</strong>
                </div>

                <div className="summary-row">
                    <span>Shipping</span>
                    <span className="text-success">
                        FREE
                    </span>
                </div>

                <hr />

                <div className="summary-total">
                    <span>Total</span>
                    <strong>{convertPrice(totalPrice)}</strong>
                </div>

                <button className="btn btn-primary w-100 mt-3">
                    Proceed to Checkout
                </button>

                <button className="btn btn-outline-secondary w-100 mt-2">
                    Continue Shopping
                </button>

            </div>
        </div>
    );
};

export default CartSummary;