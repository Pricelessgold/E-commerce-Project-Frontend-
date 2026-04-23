import React from 'react'

function Filters({ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory, sortBy, setSortBy, categories = [],}) {

  console.log('Filters categories:', categories)
  return (
    <div className="filters flex justify-center gap-6 mb-6">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Category Dropdown */}
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
      
        ))}
      </select>

      {/* Sort Dropdown */}

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
        <option value="default">Sort By</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="rating">Rating</option>
       </select>
    </div>
  )
}

export default Filters;

