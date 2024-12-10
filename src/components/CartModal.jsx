import React from "react";

const CartModal = ({ cartItems, setShowCheckout, setCartItems }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleCheckout = () => {
    alert("Checkout successful!");
    setShowCheckout(false);
    setCartItems([]);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl p-6 w-2/3 max-w-3xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Your Cart</h2>
          <button
            onClick={() => setShowCheckout(false)}
            className="text-gray-600 hover:text-gray-800 text-2xl"
          >
            ×
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-500 border-b">
                  <th className="py-2">Item</th>
                  <th className="py-2">Color</th>
                  <th className="py-2">Size</th>
                  <th className="py-2">Qnt</th>
                  <th className="py-2 text-right">Price</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr
                    key={item.id}
                    className={index === cartItems.length - 1 ? "" : "border-b"}
                  >
                    <td className="flex items-center gap-4 pt-4">
                      <img
                        src={item.image}
                        alt="Watch"
                        className="w-12 h-12 object-cover rounded"
                      />
                      <span className="font-medium">{item.name}</span>
                    </td>
                    <td className="py-4 capitalize">{item.color}</td>
                    <td className="py-4 font-bold">{item.size}</td>
                    <td className="py-4">{item.quantity}</td>
                    <td className="py-4 font-bold text-right">${item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex justify-between items-center mt-6 border-t pt-4">
              <div>
                <span className="font-bold text-lg">Total Quantity:</span>
                <span className="ml-2 text-lg">
                  {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              </div>
              <div>
                <span className="font-bold text-lg">Total:</span>
                <span className="ml-2 font-bold text-lg">${totalPrice}</span>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-4">
              <button
                onClick={() => setShowCheckout(false)}
                className="border border-gray-300 text-gray-700 font-bold px-6 py-2 rounded hover:bg-gray-300"
              >
                Continue Shopping
              </button>
              <button
                className="bg-[#6576FF] text-white px-6 py-2 rounded hover:bg-[#6576FF]"
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
