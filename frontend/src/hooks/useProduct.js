import { useEffect, useState } from "react";
import { getProduct } from "../api/productService";

export default function useProduct(id) {
    const [product, setProduct ] = useState([]);
    const [loading, setLoading ]= useState(true);

    useEffect(() => {
        getProduct(id)
        .then(response => setProduct(response.data))
        .finally(() => setLoading(false));

    }, []);

    return { product, loading };
}