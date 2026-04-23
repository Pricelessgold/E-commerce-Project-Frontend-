import ProductList from "./ProductList";

function Products() {
    return (
        <main className="p-6 bg-gray-100 min-h-screen">
            <section className="text-center mb-8">
                <h2 className="text-3xl font-bold text-blue-700">Our Products</h2>
                <p className="mt-4 text-blue-600">Browse and shop from our collection</p>
            </section>

            <ProductList />
        </main>
    )
}

export default Products