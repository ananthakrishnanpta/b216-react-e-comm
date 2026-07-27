import { useParams } from "react-router";
import useProduct from "../../../hooks/useProduct";

export default function ProductDetails() {
    const { id } = useParams(); // fetch the product id from the URL parameters

    const { product, loading } = useProduct(id);

    if (loading) {
        return <h2>Loading product...</h2>;
    }
    return (
        <div className="container row py-5">

            <div className="col">
                <img src={product.thumbnail} alt="" />
            </div>
            <div className="col">
                <h2>{product.title}</h2>
                <h4>${product.price}</h4>
                <p>
                    {product.description}
                </p>

                <button className="btn btn-warning">Add to Cart</button>
            </div>
        </div>
    )


}