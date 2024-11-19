import React, { useState } from "react";
function App() {
  const [selectedCurrency, setSelectedCurrency] = useState("AED");
  const [showOptions, setShowOptions] = useState(false);
  const currencies = ["USD", "EUR", "RUB"];

  return (
    <div className="overflow-hidden w-screen">
      <img
        className="h-[900px] transform scale-x-150 translate-x-4"
        src="https://penthouse.ae/wp-content/uploads/2023/03/Palm-flower-11-1.jpg"
        alt="Palm flower"
      />
      <div className="absolute top-0 text-white">
        <nav className="flex justify-between items-center h-40 w-screen">
          <div className="flex justify-center items-center ml-8 space-x-32 relative">
            <button>
              <img
                width="35"
                height="35"
                src="https://img.icons8.com/ios/50/FFFFFF/menu--v1.png"
                alt="menu"
              />
            </button>
            <button
              className="w-12 h-12 rounded-full text-center text-lg duration-500 font-semibold hover:bg-white hover:text-gold"
              onMouseEnter={() => setShowOptions(!showOptions)}
            >
              {selectedCurrency}
            </button>
            {showOptions && (
              <div className="absolute top-14 left-9 flex flex-col space-y-4">
                {currencies.map((currency) => (
                  <button
                    key={currency}
                    className="w-10 h-10 transition duration-500 rounded-full text-lg bg-white font-semibold text-black  hover:bg-gold hover:text-white hover:w-12 hover:h-12"
                    onClick={() => {
                      setSelectedCurrency(currency);
                      setShowOptions(false);
                    }}
                  >
                    {currency}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-center items-center ml-10 mr-16 space-x-6 text-lg font-semibold">
            <button className="hover:text-gold transition duration-500">
              Log in
            </button>
            <button className="transition duration-500 hover:text-gold">
              Enquiry
            </button>
            <button className="w-12 h-12 transition duration-500 flex justify-center items-center rounded-full hover:bg-gold">
              <img
                width="26"
                height="26"
                src="https://img.icons8.com/metro/26/FFFFFF/like.png"
                alt="like"
              />
            </button>
            <button className="w-12 h-12 transition duration-500 flex justify-center items-center rounded-full hover:bg-gold">
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/material-outlined/24/FFFFFF/whatsapp--v1.png"
                alt="whatsapp"
              />
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default App;