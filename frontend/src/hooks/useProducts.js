import { useEffect, useState } from "react";
import { getProducts } from "../api/productService";

export default function useProducts() {
    const [products, setProducts ] = useState([]);
    const [loading, setLoading ]= useState(true);

    useEffect(() => {
        getProducts()
        .then(response => setProducts(response.data.products))
        .finally(() => setLoading(false));

    }, []);

    return { products, loading };
}