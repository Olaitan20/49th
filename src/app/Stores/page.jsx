"use client";
import { products } from "@/data/products";
import React, { useState } from "react";
import Image from "next/image";

export default function StorePage() {
  const [cart, setCart] = useState([]);
  const [isCheckoutOpen, setCheckoutOpen] = useState(false);

  // helper functions
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // totals
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="mx-[110px] py-[60px]">
      {/* Header with Cart Button */}
      <div className="pb-[32px] flex justify-between items-center">
        <div>
          <p className="text-[14px] uppercase mb-[8px] tracking-widest text-[#FFFFFF80]">
            /// shop
          </p>
          <p className="text-[16px] uppercase font-[800]">stop by the store</p>
        </div>

        <button
          onClick={() => setCheckoutOpen(true)}
          className="relative flex items-center gap-[4px] bg-[#F26509] text-[14px] text-[#fff] px-[12px] py-[8px] rounded-full"
        >
          <Image src="/icons/cart.svg" alt="Cart" width={18} height={18} />
          {cartCount > 0 && (
            <span className="text-xs font-bold px-2 py-[2px]">{cartCount}</span>
          )}
          item
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-4 bg-[#fff] text-[#000]">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col p-[20px] bg-[#F7F7F7] ml-[2px] items-center h-full"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[200px] mb-[10px] object-contain"
            />

            <p className="text-[12px] font-[500] mt-[10px] text-left w-full min-h-[20px]">
              {product.name}
            </p>

            <div className="flex-1" />

            <div className="flex justify-between items-center w-full mt-[8px]">
              <p className="text-gray-500 text-[12px] font-[500]">
                ₦{product.price.toLocaleString()}
              </p>
              <button
                onClick={() => addToCart(product)}
                className="flex items-center justify-center w-[24px] h-[24px] rounded-full border border-black"
              >
                <Image
                  src="/icons/plus.svg"
                  width="12"
                  height="12"
                  alt="add to cart"
                />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Visit shop footer */}
      <div className="text-center flex items-center justify-center gap-[4px] capitalize text-[14px] mt-[13.5px] font-[500]">
        <p>visit shop</p>
        <Image src="/icons/right.svg" width="24" height="24" alt="visit shop" />
      </div>

      {/* Checkout Modal */}
      {isCheckoutOpen && (
        <div
          className="fixed inset-0 bg-[#000] bg-opacity-60 flex justify-center items-center z-50"
          onClick={() => setCheckoutOpen(false)}
        >
          <div
            className="bg-white text-black p-6 rounded-lg w-[500px] max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-4">Checkout</h2>

            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <>
                <ul className="space-y-4">
                  {cart.map((item) => (
                    <li
                      key={item.id}
                      className="flex justify-between items-center border-b pb-2"
                    >
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-gray-500">
                          ₦{item.price.toLocaleString()}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="px-2 py-1 border rounded"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => addToCart(item)}
                          className="px-2 py-1 border rounded"
                        >
                          +
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="flex justify-between items-center mt-6">
                  <p className="font-bold">Total:</p>
                  <p className="font-bold">₦{totalAmount.toLocaleString()}</p>
                </div>

                <div className="mt-6 flex justify-end gap-4">
                  <button
                    onClick={() => setCheckoutOpen(false)}
                    className="px-4 py-2 border rounded"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => alert("Proceed to payment (to be added)")}
                    className="px-4 py-2 bg-[#F26509] text-white rounded"
                  >
                    Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}



