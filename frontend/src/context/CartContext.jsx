import { useState, useEffect, createContext } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart(
                (currentCart) => {

                // Checking for matching product in cart
                const existingProduct = currentCart.find(
                (item) => item.id === product.id);
                // If match exists, increment quantity
                if (existingProduct) {
                    return currentCart.map((item) =>   (
                        item.id === product.id 
                        ? {...item, 
                            quantity: item.quantity + 1} 
                        : item))
                    }
                // if match doesn't exist
                return [
                    ...currentCart,
                    {
                        ...product,
                        quantity: 1
                    }
                ];

            });

   
    };

    return (
        <CartContext.Provider value={{ 
            cart, addToCart
             }}>
            {{children}}
        </CartContext.Provider>
        );


     // removeFromCart(product)
    // incQuantity(product)
    // decQuantity(product)
    // clearCart()
    // totalItems(),
    // totalPrice
}