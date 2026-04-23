
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'


const Header = ({title}) => {
  const { cart } = useContext(CartContext)
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className = "bg-blue-300 text-blue-800 relative flex justify-between items-center h-16 px-6">
       <h1 className="text-xl font-bold">{title}</h1>
       <nav className= "flex items-center gap-6">
            <Link to="/" className="text-white hover:underline">
                Home</Link>
            <Link to="/products" className="text-white hover:underline">
                Products</Link>
            
            <Link to="/cart" className="relative text-white hover:underline">
                Cart
                {cartCount > 0 && (
                     <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-2">
                    {cartCount}
                    </span>
              )}
            
            </Link>
       </nav>
            
    </header>   
  )
}

export default Header








