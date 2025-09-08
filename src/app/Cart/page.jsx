"use client";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty 🛒</p>
      ) : (
        <>
          <ul className="space-y-6">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-contain"
                  />
                  <div>
                    <h2 className="text-sm font-semibold">{item.name}</h2>
                    <p className="text-gray-500">
                      ₦{item.price.toLocaleString()} × {item.quantity}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-sm"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex justify-between items-center border-t pt-4">
            <span className="font-semibold">Total</span>
            <span className="font-bold">₦{total.toLocaleString()}</span>
          </div>
        </>
      )}
    </div>
  );
}
