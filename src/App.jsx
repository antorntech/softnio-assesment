import React, { useState } from "react";

const watchImages = {
  purple: "/assets/images/watch-purple.png",
  cyan: "/assets/images/watch-cyan.png",
  blue: "/assets/images/watch-blue.png",
  black: "/assets/images/watch-black.png",
};

const SmartWatchCard = () => {
  const [selectedColor, setSelectedColor] = useState("purple");
  const [showCheckout, setShowCheckout] = useState(false);

  const handleAddToCart = () => {
    setShowCheckout(true);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 flex gap-8">
      <div className="w-1/2 rounded-lg">
        <img
          src={watchImages[selectedColor]}
          alt="Smart Watch"
          className="w-full h-auto"
        />
      </div>

      <div className="w-1/2">
        <h2 className="text-3xl font-bold mb-2">Classy Modern Smart Watch</h2>
        <div className="flex items-center mb-4">
          <span className="text-yellow-500">★★★★☆</span>
          <span className="ml-2 text-gray-600">(2 Reviews)</span>
        </div>
        <div className="text-gray-400 line-through">$99.00</div>
        <div className="text-2xl text-blue-600 font-bold mb-4">$79.00</div>
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
            <button className="border px-4 py-2 rounded hover:bg-gray-200">
              S $69
            </button>
            <button className="border px-4 py-2 rounded hover:bg-gray-200">
              M $79
            </button>
            <button className="border px-4 py-2 rounded hover:bg-gray-200">
              L $89
            </button>
            <button className="border px-4 py-2 rounded hover:bg-gray-200">
              XL $99
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center border rounded px-3 py-2">
            <button className="text-gray-600">−</button>
            <span className="mx-2">0</span>
            <button className="text-gray-600">+</button>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {showCheckout && (
        <button className="fixed bottom-8 right-8 bg-yellow-500 text-white px-4 py-2 rounded-full shadow-lg">
          Checkout{" "}
          <span className="ml-1 rounded-full bg-white text-yellow-500 px-2">
            2
          </span>
        </button>
      )}
    </div>
  );
};

const App = () => {
  return (
    <div className="w-full h-screen">
      <SmartWatchCard />
    </div>
  );
};

export default App;
