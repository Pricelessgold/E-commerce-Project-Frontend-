import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext)

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h2 className="mb-6 text-2xl font-bold">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-lg bg-white p-4 shadow"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 rounded object-cover"
                  />

                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="font-medium text-blue-600">${item.price}</p>
                    <p className="text-sm text-gray-600">
                      Subtotal: ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="rounded bg-gray-300 px-3 py-1"
                  >
                    -
                  </button>

                  <span className="font-semibold">{item.quantity}</span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="rounded bg-gray-300 px-3 py-1"
                  >
                    +
                  </button>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="rounded bg-red-500 px-3 py-1 text-white"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg bg-white p-4 shadow">
            <h3 className="text-xl font-bold">
              Total: ${totalPrice.toFixed(2)}
            </h3>
          </div>
        </>
      )}
    </main>
  )
}

export default Cart