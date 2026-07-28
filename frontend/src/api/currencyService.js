import { currencyAPI } from "./axios";

export const getExchangeRates = async (base = 'USD') => {
    const response = await currencyAPI.get(`/latest/${base}`);

    return response.data.rates;
};
