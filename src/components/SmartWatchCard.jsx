import React, { useState } from "react";
import { Heart } from "iconsax-react";
import CartModal from "./CartModal";

const SmartWatchCard = () => {
  const [selectedColor, setSelectedColor] = useState("purple");
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [showCheckout, setShowCheckout] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const watchImages = {
    purple: "/assets/images/watch-purple.png",
    cyan: "/assets/images/watch-cyan.png",
    blue: "/assets/images/watch-blue.png",
    black: "/assets/images/watch-black.png",
  };

  const handleAddToCart = () => {
    if (selectedSize && quantity > 0) {
      const newItem = {
        id: `${selectedColor}-${selectedSize}`,
        name: "Classy Modern Smart Watch",
        color: selectedColor,
        size: selectedSize,
        quantity: quantity,
        price: sizePrice(selectedSize) * quantity,
        image: watchImages[selectedColor],
      };

      setCartItems((prevItems) => [...prevItems, newItem]);
    } else {
      alert("Please select a wrist size and quantity before adding to cart.");
    }
  };

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () =>
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0));

  const sizePrice = (size) => {
    switch (size) {
      case "S":
        return 69;
      case "M":
        return 79;
      case "L":
        return 89;
      case "XL":
        return 99;
      default:
        return 0;
    }
  };

  return (
    <div className="w-full md:max-w-4xl md:mx-auto p-6 flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2 rounded-lg">
        <img
          src={watchImages[selectedColor]}
          alt="Smart Watch"
          className="w-full h-auto"
        />
      </div>

      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-2">Classy Modern Smart Watch</h2>
        <div className="flex items-center mb-4">
          <span className="text-yellow-500">★★★★☆</span>
          <span className="ml-2 text-gray-600">(2 Reviews)</span>
        </div>
        <div className="text-gray-400 line-through">$99.00</div>
        <div className="text-2xl text-[#6576FF] font-bold mb-4">$79.00</div>
        <p className="text-gray-600 mb-4">
          I must explain to you how all this mistaken idea of denouncing
          pleasure was born.
        </p>

        <div className="mb-4">
          <span className="block font-semibold mb-2">Band Color</span>
          <div className="flex gap-3">
            {Object.keys(watchImages).map((color) => (
              <div
                key={color}
                className="border flex items-center justify-center p-1 rounded-full transition-colors duration-200"
                style={{
                  borderColor: color === selectedColor ? color : "#d1d5db",
                }}
              >
                <button
                  className="size-5 rounded-full"
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                ></button>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <span className="block font-semibold mb-2">Wrist Size</span>
          <div className="flex gap-2">
            {["S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                className={`border px-4 py-2 rounded transition-colors duration-200 font-bold ${
                  selectedSize === size
                    ? "text-black border-[#6576FF]"
                    : "border-gray-300 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                <span
                  className={`text-lg transition-colors duration-200 font-bold ${
                    selectedSize === size ? "text-[#6576FF]" : "text-black"
                  }`}
                >
                  {size}
                </span>
                {size === "S" ? (
                  <span className="font-normal text-gray-400"> $69</span>
                ) : size === "M" ? (
                  <span className="font-normal text-gray-400"> $79</span>
                ) : size === "L" ? (
                  <span className="font-normal text-gray-400"> $89</span>
                ) : (
                  <span className="font-normal text-gray-400"> $99</span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center border rounded px-3 py-2">
            <button
              className="text-gray-600 hover:text-gray-800"
              onClick={handleDecrement}
            >
              −
            </button>
            <span className="mx-4">{quantity}</span>
            <button
              className="text-gray-600 hover:text-gray-800"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-[#6576FF] text-white px-6 py-2 rounded hover:bg-[#6576FF]"
          >
            Add to Cart
          </button>
          <button>
            <Heart size="32" color="#6576FF" />
          </button>
        </div>

        {cartItems.length > 0 && (
          <button
            onClick={() => setShowCheckout(true)}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-[#FFBB5A] text-[#364A63] font-semibold px-5 py-3 rounded-full shadow-lg"
          >
            Checkout{" "}
            <span className="ml-1 rounded-md bg-white text-[#364A63] px-2">
              {cartItems.reduce((total, item) => total + item.quantity, 0)}
            </span>
          </button>
        )}
      </div>

      {showCheckout && (
        <CartModal
          cartItems={cartItems}
          setShowCheckout={setShowCheckout}
          setCartItems={setCartItems}
        />
      )}
    </div>
  );
};

export default SmartWatchCard;
