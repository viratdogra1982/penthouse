import React, { useState } from "react";
import "./App.css"
import myPhoto from "./Photos/penthouse-logo.jpg";
function App() {
  const [selectedCurrency, setSelectedCurrency] = useState("AED");
  const [showOptions, setShowOptions] = useState(false);
  const currencies = ["AED","USD", "EUR", "RUB"];

  return (
    <>
    <div className="w-full overflow-hidden">
      <img
        className="h-[840px] transform scale-x-150 translate-x-4"
        src="https://penthouse.ae/wp-content/uploads/2023/03/Palm-flower-11-1.jpg"
        alt="Palm flower"
      />
      <div className="absolute top-0 text-white">
        <nav className="flex justify-between items-center h-40 w-screen border-b border-neutral-500">
          <div className="flex justify-center items-center ml-12 space-x-32 relative">
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
              onClick={() => setShowOptions(!showOptions)}
            >
              {selectedCurrency}
            </button>
            {showOptions && (
              <div className="absolute top-14 left-9 flex flex-col space-y-4 animate-fadeIn " onMouseLeave={() => setShowOptions(!showOptions)}>
                {currencies
                  .filter((currency) => currency !== selectedCurrency)
                  .map((currency) => (
                  <button
                    key={currency}
                    className="w-12 h-12 transition duration-500 rounded-full text-lg bg-white font-semibold text-black hover:bg-gold hover:text-white"
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
          <div className="ml-16">
            <img src={myPhoto} className="bg-hidden h-20 w-72 pb-4 scale-120"></img>
          </div>

          <div className="flex justify-center items-center ml-10 mr-8 space-x-6 text-lg font-semibold">
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





        <div className="flex text-neutral-400 space-x-2 ml-12 mt-6 text-sm "> 
          <button className="hover:text-white">Home</button>
          <button className="">&gt;</button>
          <button className="hover:text-white">Areas</button>
          <button className="">&gt;</button>
          <button className="hover:text-white">Palm Jumeirah</button>
          <button className="">&gt;</button>
          <button className="hover:text-white">Palm Flower</button>
        </div>


  <div className="mt-24 relative">
  <div className="text-center text-9xl text-gold font-montserrat z-50 relative">
    Projects
  </div>

  <div className="text-5xl px-48 font-semibold text-center -mt-4 z-10 relative">
    STUNNING DELUXE RESIDENCES WITH SPECTACULAR VIEWS OVER THE ARABIAN GULF
  </div>
</div>
</div>
</div>
    


    <div className="pl-40 pr-96 mt-24">
        <div className="text-xl italic">
          WITH NINE EXQUISITE PENTHOUSES AND A DUPLEX PENTHOUSE SPANNING TWO
          FLOORS, THIS UNIQUE 11-STOREY BUILDING EPITOMIZES LUXURY AND MODERNITY
          AND IS THE PERFECT PROPERTY FOR REFINED URBANITES SEEKING A NEW
          LIFESTYLE IN THE DYNAMIC CITY OF DUBAI. THE PROPERTY ALSO INCLUDES AN
          ARRAY OF AMENITIES FOR YOUR CONVENIENCE.
        </div>

    
  <div className="flex justify-start mt-12 space-x-4">
  <button
    className="px-6 py-3 text-lg border rounded-full transition duration-300 bg-gold text-white hover:bg-white hover:text-black hover:border-black ">
    Discover more
  </button>

  <button
    className="px-6 py-3 text-lg border border-black rounded-full transition duration-300 bg-white text-black hover:bg-gold hover:text-white hover:border-0">
    Get Project Brochure
  </button>
</div>
</div>


<div className="flex justify-between px-8 mt-28">
<div className="flex">
<img width="50" height="50" src="https://img.icons8.com/ios/50/wallet.png" alt="wallet"/>
<div  className="ml-2">
<div className="font-semibold text-2xl ">
  AED 95,00,000
</div>
<div>
  Starting Price
</div>
</div>
</div>

<div className="flex">
<img width="50" height="50" src="https://img.icons8.com/ios/50/discount.png" alt="discount"/>
<div  className="ml-2 ">
<div className="font-semibold text-2xl">
  On Demand
</div>
<div>
 Payment Plan
</div>
</div>
</div>

<div className="flex">
<img width="50" height="50" src="https://img.icons8.com/ios/50/home--v1.png" alt="home--v1"/>
<div  className="ml-2 ">
<div className="font-semibold text-2xl ">
  2024
</div>
<div>
  Completion
</div>
</div>
</div>

<div className="flex">
<img width="50" height="50" src="https://img.icons8.com/ios/50/army-star.png" alt="army-star"/>
<div  className="ml-2">
<div className="font-semibold text-2xl ">
  Brand Residences
</div>
<div>
by Alpago Group
</div>
</div>
</div>
</div>














  <div className="mt-72">
  <div className="text-7xl pl-8 text-gray-700">
  THE PALM FLOWER, PALM JUMEIRAH, DUBAI
  </div>

  <div className="mr-72 mt-24">
  <img src="https://penthouse.ae/wp-content/uploads/2023/03/Palm-Flower-2-1536x1087.jpg" />
</div>

<div className="text-center text-xl px-44 mt-24 italic">
Those looking to purchase a modern apartment in Dubai should consider the Palm Flower. 
This 11-storey building, developed by Alpago Group, cuts a unique silhouette against the 
skyline of Palm Jumeirah. Its architectural design is inspired by the palm flower, with 
expansive petal-like balconies jutting out on alternating sides of the building. Each balcony 
has its own infinity pool and boasts spectacular views over the island and the surrounding sea. 
The property is just as breathtaking on the inside, with spacious floor plans between 9,000 and 
18,300 sq. ft. With lavish furnishings from world-class designers and wall-to-ceiling windows 
providing panoramic views of the surrounding landscape, a penthouse at the Palm Flower is 
the perfect place to relax in style. If you’re looking for a penthouse in Dubai for sale, consider 
investing in an apartment in this exquisitely designed residential development. With only ten 
highly-desirable units.
</div>

<div className="mt-12 pl-44">
<button
    className="px-6 py-3 text-lg border rounded-full transition duration-300 bg-gold text-white hover:bg-white hover:text-black hover:border-black">
    Request Available Units & Prices
  </button>
</div>
  </div>

  <div className="flex justify-between px-8 mt-28">
<div className="flex">
<img width="50" height="50" src="https://img.icons8.com/ios/50/furniture.png" alt="furniture"/>
<div  className="ml-2">
<div className="font-semibold text-2xl ">
  Furnsihed
</div>
<div>
  Appartment
</div>
</div>
</div>

<div className="flex">
<img width="50" height="50" src="https://img.icons8.com/ios/50/beach.png" alt="beach"/>
<div  className="ml-2 ">
<div className="font-semibold text-2xl">
  Private
</div>
<div>
 Beach
</div>
</div>
</div>

<div className="flex">
<img width="50" height="50" src="https://img.icons8.com/ios/50/swimming-pool.png" alt="swimming-pool"/>
<div  className="ml-2 ">
<div className="font-semibold text-2xl ">
  Infinity
</div>
<div>
  Pool
</div>
</div>
</div>

<div className="flex">
<img width="50" height="50" src="https://img.icons8.com/ios/50/teddy-bear.png" alt="teddy-bear"/>
<div  className="ml-2">
<div className="font-semibold text-2xl ">
  Kids
</div>
<div>
Playzone
</div>
</div>
</div>
</div>




<div className="mt-36 ">
  <img
    src="https://penthouse.ae/wp-content/uploads/2023/03/Palm-Flower-4-1536x857.jpg"
    alt="Palm Flower"
    className="w-full"
  />
</div>

<div className="flex flex-row  mb-28">
  <img
    src="https://penthouse.ae/wp-content/uploads/2023/03/Palm-Flower-4-1536x857.jpg"
    alt="Palm Flower Image 1"
    className="w-1/4"
  />
  <img
    src="https://penthouse.ae/wp-content/uploads/2023/03/Palm-Flower-9-1536x1087.jpg"
    alt="Palm Flower Image 2"
    className="w-1/4 "
  />
  <img
    src="https://penthouse.ae/wp-content/uploads/2023/03/Palm-Flower-16-1536x935.jpg"
    alt="Palm Flower Image 3"
    className="w-1/4"
  />
  <img
    src="https://penthouse.ae/wp-content/uploads/2023/03/Palm-Flower-17-1536x877.jpg"
    alt="Palm Flower Image 4"
    className="w-1/4"
  />
</div>
   











    </>
  );
}

export default App;