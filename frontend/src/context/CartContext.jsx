import { createContext, useMemo, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    // Add product to cart
    const addToCart = (product) => {
        setCart((currentCart) => {
            const existingItem = currentCart.find(
                (cartItem) => cartItem.item.id === product.id
            );

            if (existingItem) {
                return currentCart.map((cartItem) =>
                    cartItem.item.id === product.id
                        ? {
                              ...cartItem,
                              quantity: cartItem.quantity + 1,
                          }
                        : cartItem
                );
            }

            return [
                ...currentCart,
                {
                    item: product,
                    quantity: 1,
                },
            ];
        });
    };

    // Update quantity (+1 or -1)
    const updateQuantity = (productId, change) => {
        setCart((currentCart) =>
            currentCart
                .map((cartItem) => {
                    if (cartItem.item.id !== productId) {
                        return cartItem;
                    }

                    return {
                        ...cartItem,
                        quantity: cartItem.quantity + change,
                    };
                })
                .filter((cartItem) => cartItem.quantity > 0)
        );
    };

    // Remove product completely
    const removeFromCart = (productId) => {
        setCart((currentCart) =>
            currentCart.filter(
                (cartItem) => cartItem.item.id !== productId
            )
        );
    };

    // Empty the cart
    const clearCart = () => {
        setCart([]);
    };

    // Total quantity of all products
    const totalItems = useMemo(() => {
        return cart.reduce(
            (total, cartItem) => total + cartItem.quantity,
            0
        );
    }, [cart]);

    // Total cart value
    const totalPrice = useMemo(() => {
        return cart.reduce(
            (total, cartItem) =>
                total + cartItem.item.price * cartItem.quantity,
            0
        );
    }, [cart]);

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                updateQuantity,
                removeFromCart,
                clearCart,
                totalItems,
                totalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}