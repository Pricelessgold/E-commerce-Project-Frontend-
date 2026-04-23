import ProductList from "./ProductList";
import {Link} from 'react-router-dom'

function Main(){
    return (
        <main className = "p-6 bg-gray-100 min-h-screen">
            <section className="text-center mb-8">
               <h2 className="text-3xl font-bold text-blue-700">Welcome to LebenPro</h2>
                <p className="mt-4 text-blue-600">Discover your favorite products</p>

                <Link 
                to="/products"
                className="inline-block mt-6 rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white hover:bg-blue-600 transition">
                Search for More Products
                </Link>
            </section>
            <section>
                <h3 className="mb-6 text-2xl font-bold text-gray-800">Featured Products</h3>
                <ProductList limit={6} />
            </section>


        </main>

    )
}

export default Main