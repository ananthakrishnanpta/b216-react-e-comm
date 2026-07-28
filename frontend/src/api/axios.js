import axios from "axios";


// creating an axios instance using the base url of api

// Product
export default axios.create({
    baseURL :  "https://dummyjson.com/",
    timeout : 10000
});

// Currency
export const currencyAPI = axios.create({
    baseURL : "https://open.er-api.com/v6",
    timeout : 10000
});
