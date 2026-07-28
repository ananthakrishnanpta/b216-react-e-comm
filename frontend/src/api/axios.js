import axios from "axios";


// creating an axios instance using the base url of api
export default axios.create({
    baseURL :  "https://dummyjson.com/",
    timeout : 10000
});

const currencyAPI = axios.create({
    baseURL : "https://open.er-api.com/v6/latest/USD",
    timeout : 10000
})