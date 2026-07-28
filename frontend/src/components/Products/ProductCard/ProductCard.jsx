import { Link } from "react-router";
import './ProductCard.css';

import useCurrency from "../../../hooks/useCurrency";

function ProductCard({ product }) {

    const { formatPrice } = useCurrency();

    return (
        <div className="card h-100 product">
            <img src={product.thumbnail} className="card-img-top" alt="" />
            <div className="card-body">
                <h5>{product.title}</h5>
                <p className="price">
                    {formatPrice(product.price)}
                </p>
                <Link to={`/products/${product.id}`} className="btn btn-dark">
                    View Details
                </Link>
            </div>
        </div>
    )
};
export default ProductCard;