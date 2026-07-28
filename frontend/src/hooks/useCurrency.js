import { useContext } from "react";
import { CurrencyContext } from "../context/CurrencyContext";


export default function useCurrency() {
    return useContext(CurrencyContext);
}