import ProductGrid from "../../components/Products/ProductGrid/ProductGrid";
import useProducts from "../../hooks/useProducts";

const Home = () => {
    const {products, loading} = useProducts();
    if(loading) {
        return <h2>Loading products... </h2>
    }
    return (
    <>
    <section id="products">
        <div className="container py-4">
            <h2>Latest Products</h2>
            <ProductGrid products={products} />
        </div>
    </section>
    </>
    );
}


export default Home;