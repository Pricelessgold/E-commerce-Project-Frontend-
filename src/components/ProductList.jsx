import ProductCard from './ProductCard'
import { useState, useEffect } from 'react'
import Filters from './Filters'

const ProductList = ({ limit }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [sortBy, setSortBy] = useState('default')

  useEffect(() => {
  const fetchData = async () => {
    try {
      const productsRes = await fetch('https://dummyjson.com/products')
      const productsData = await productsRes.json()

      const formattedData = productsData.products.map((item) => ({
        id: item.id,
        name: item.title,
        price: item.price,
        image: item.thumbnail,
        category: item.category,
        description: item.description,
        rating: item.rating,
      }))

      setProducts(formattedData)
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  fetchData()
}, [])

    const filteredProducts = products.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === '' || item.category === selectedCategory)
  )

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price
        if (sortBy === 'price-high') return b.price - a.price
        if (sortBy === 'rating') return b.rating - a.rating
        return 0
    })

    const displayedProducts = limit
        ? sortedProducts.slice(0, limit)
        : sortedProducts


    const categories = [...new Set(products.map((item) => item.category))].slice(0, 5)
    if (loading) {
        return <p className="text-center">Loading products...</p>
    }

    return (
        <section className="p-6">
            {!limit && (
                <Filters
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                    categories={categories}
                    />
        )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {displayedProducts.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            description={item.description}
            rating={item.rating}
          />
        ))}
      </div>
    </section>
  )
}

export default ProductList