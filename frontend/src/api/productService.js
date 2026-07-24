import api from "./axios";

// All products
export const getProducts = () => 
    api.get("/products");

// Unique product
export const getProduct = (id) => 
    api.get(`/products/${id}`);

// Search Products
export const searchProducts = (query) => 
    api.get(`/products/search?q=${query}`);

// Fetch Categories
export const getCategories = () => 
    api.get('/products/categories');

// Fetch Products from Categories
export const getCategoryProducts = (category) => 
    api.get(`/products/category/${category}`);


