import ProductCard from "../ProductCard/ProductCard";

export default function ProductGrid({products}){
    return (
        <div className="row">
            {products.map(
                product => (
                    <div className="col-sm-6 col-md-4 col-lg-3 mt-2" key={product.id}>
                        <ProductCard product={product} />
                    </div>
            ))}
        </div>
    );
}