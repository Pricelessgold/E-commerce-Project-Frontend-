import React from 'react'
import {useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'



const ProductCard= ({id, name, price, image, description, rating}) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [showDetails, setShowDetails] = useState(false)

    
    const { addToCart } = useContext(CartContext)

    const handleAddToCart = () => {
        const item = {id, name, price, image}
        addToCart(item)
    }   
    
    const roundedRating = Math.round(rating) || 0

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded"
      />

      <div className="mt-3 flex items-center justify-between">
        <h3 className="text-lg font-bold">{name}</h3>

        <button
          className="text-xl transition transform hover:scale-110 cursor-pointer"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>

      <p className="mt-2 text-blue-700 font-semibold">${price}</p>

      <p className="mt-1 text-yellow-500">
        {'★'.repeat(roundedRating)}
        {'☆'.repeat(5 - roundedRating)}
        <span className="ml-2 text-sm text-gray-600">
          {rating}
        </span>
      </p>

      
      <div className="flex gap-3 mt-4">
        <button
          className="px-4 bg-blue-400 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer"
          onClick={handleAddToCart}
        >
          Add
        </button>

         <button
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-400 transition cursor-pointer"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? "Hide" : "Details"}
          </button>

      </div>
      {/* 👇 ADD IT HERE */}
      {showDetails && (
          <div className="mt-3 rounded-lg bg-gray-100 p-3">
            <p className="text-sm leading-6 text-gray-700">
              {description || 'No description available.'}
            </p>
          </div>
)}

    </div>
  )
}

export default ProductCard