import { useState, useEffect, createContext } from "react";

import { getExchangeRates } from "../api/currencyService";

// Creating a context to be provided to the app
export const CurrencyContext = createContext();

// Designing the context provider

export default function CurrencyProvider({ children }){
    const [ currency, setCurrency ] = useState("USD");
    const [ rates, setRates ] = useState({});

    useEffect(() => {
        async function loadRates() {
            try {
                const data = await getExchangeRates();
                setRates(data);
            }
            catch (err) {
                console.error(err);
            }
        }
        loadRates();
    }, []);

    const convertPrice = (usdPrice) => {
        const rate = rates[currency] ?? 1; // Nullish Coalescing Operator
        return usdPrice * rate;
    };

    const formatPrice = (usdPrice) => {
        const converted = convertPrice(usdPrice);
        return new Intl.NumberFormat('en-IN', { style: 'currency', currency: currency }).format(converted);
    }

    return (
        <CurrencyContext.Provider value={{ 
            currency, setCurrency, 
            convertPrice, formatPrice
            }} >
        {children}
        </CurrencyContext.Provider>
    );

}
