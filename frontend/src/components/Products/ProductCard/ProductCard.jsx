import { Link } from "react-router";

function ProductCard({ product }) {
    return (
        <div className="card h-100">
            <img src="{product.thumbnail}" className="card-img-top" alt="" />
            <div className="card-body">
                <h5>{product.title}</h5>
                <p className="price">$.{product.price}</p>
                <Link to={`/products/${product.id}`} className="btn btn-primary">
                    View Details
                </Link>
            </div>
        </div>
    )
};
export default ProductCard;