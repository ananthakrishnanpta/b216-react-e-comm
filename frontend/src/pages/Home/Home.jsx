import ProductGrid from "../../components/Products/ProductGrid/ProductGrid";
import useProducts from "../../hooks/useProducts";

const Home = () => {
    const { products, loading } = useProducts();
    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center">
                <h2>Loading Products...</h2>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>

        )
        }
    
        return (
        <>
            <section id="products">
                <div className="container">
                    <h2>Latest Products</h2>
                    <ProductGrid products={products} />
                </div>
            </section>
        </>
    );
}


export default Home;