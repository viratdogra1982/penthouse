import React, { useState } from "react";
import "./App.css"
import myPhoto from "./Photos/penthouse-logo.jpg";
import myAnotherPhoto from "./Photos/last section.jpg"



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

<div className="w-full ">
  <div className="flex" >
    <div>
    <img className=" w-7/12  h-[900px] scale-x-150" src="https://penthouse.ae/wp-content/uploads/2023/03/Palm-Flower-11.jpg"></img>
  <div className="mt-20 px-8 text-lg italic">If you’re looking to buy a penthouse in Dubai, there’s no doubt you feel that the location is just as important as the property itself. Positioned on the iconic Palm Jumeirah, it’s fair to say that the Palm Flower is in one of the most exclusive, highly coveted areas in the world. This development is located within easy travelling distance of some of the Palm’s most famous attractions, as well as an array of world-class eateries and retailers. Less than a kilometre away is The View, an observation deck offering panoramic views of this gorgeous island. There are also several beaches nearby that you should take the time to explore, like Sufouh Beach and Marina Beach. Once you’ve had your fill of exploration, you can have a bite to eat at one of the splendid venues in your neighbourhood; for example, KOKO BAY, Kyma Beach, or Little Miss India.</div>
  </div>

  <div>
    <div className="w-full -ml-20" >
    <div className="text-6xl mb-10"> THE PINNACLE OF LUXURY LIVING IN DUBAI</div>
    <div className="text-lg italic"> When looking for a penthouse in Dubai, you want to be sure that the property has all the necessary amenities for a life of ease and comfort. Rest assured that the Palm Flower has everything you could ever need! This includes personalized parking pods in the basement levels, private elevators opening up directly into your apartment, and a private gym and infinity pool in each penthouse. There’s also a cinema hall where you can kick back and take in a movie. Additionally, in the basement, there is also a spacious room for hosting, meaning you can have guests over for the most incredible parties.
    </div>
    </div>
    <div>
    <img className="mt-36 h-[500px]" src="https://penthouse.ae/wp-content/uploads/2023/03/Palm-Flower-4.jpg"></img>
  </div>
  </div>
  </div>
  </div>


  <button
    className="mt-24 mb-32 ml-10 px-6 py-3 text-lg border border-black rounded-full transition duration-300 bg-white text-black hover:bg-gold hover:text-white hover:border-0">
    Find out more about Dubai areas
  </button>

<img className="mb-40" src="https://penthouse.ae/wp-content/uploads/2023/03/Palm-Flower-1-1536x1086.jpg"></img>



<div className="flex">
  <div className="ml-8 w-1/2">
    <p className="text-3xl pb-2 ">4-BEDROOM UNITS</p>
    <p className="text-lg pb-2 text-neutral-400">Appartments</p>
    <button className="text-lg text-gold pb-8">Palm Jumeirah</button>
    <p className="text-lg flex pb-16">
    <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/1A1A1A/microsoft.png" alt="microsoft"/>
<span className="font-semibold px-4">Total Area:</span>
6,631 sq.m.</p>
<button
  className="group flex px-6 py-3 w-60 text-lg border rounded-full transition duration-300 bg-gold text-white hover:bg-white hover:text-black hover:border-black"
>
  <img
    className="transition duration-300 group-hover:filter group-hover:invert"
    width="32"
    height="32"
    src="https://img.icons8.com/windows/32/FFFFFF/download--v1.png"
    alt="download--v1"
  />
  Download Brochure
</button>

  <br></br>
  <button
  className="group flex px-6 py-3 w-60 text-lg border rounded-full transition duration-300 bg-gold text-white hover:bg-white hover:text-black hover:border-black"
>
  <img
    className="transition duration-300 group-hover:filter group-hover:invert"
    width="32"
    height="32"
    src="https://img.icons8.com/windows/32/FFFFFF/download--v1.png"
    alt="download--v1"
  />
  Get All Floor Plans
</button>


  <div className="space-x-4 mt-40">
    <button className="h-12 w-12 rounded-full border border-black hover:bg-gold hover:text-white hover:border-0">&lt;</button>
    <button className="h-12 w-12 rounded-full border border-black hover:bg-gold hover:text-white hover:border-0">&gt;</button>
  </div>
  </div>



  <div className="w-1/2">
  <div className=" flex justify-center items-center space-x-6 mr-24 mt-4">
   <button className="bg-gold text-xl font-bold h-14 w-14 text-white ">  4 Br </button>
   <button className="bg-white border border-black text-xl h-14 w-14">  6 Br </button>
  </div>
  <img className="pr-24 pb-32" src="https://penthouse.ae/wp-content/uploads/2023/03/Palm-Flower-35-1921x2048.jpg"></img>
  </div>
</div>





<div className="flex  mt-24 bg-neutral-200 pb-24">
  <div className="w-1/2 mt-0 pt-0">
    <img
      className="w-full h-[1100px] mt-0 pt-0"
      src="https://penthouse.ae/wp-content/uploads/2023/01/atlantis-the-royal-residences-40-1536x1024.jpg"
      alt="Atlantis"
    />
  </div>

  <div className=" w-1/2 ">
    <div className="text-6xl px-32 pt-4">
      GOT CONFUSED? COMPLETE A QUIZ & GET THE BEST OFFERS
    </div>

    <div className="pl-32 pr-12 pt-8 text-lg italic">
      Being qualified property experts with years of experience, we realize how confusing Dubai’s off-plan property market could be for new buyers, as well as for professional investors. Especially when there are thousands of off-plan properties in Dubai. You won’t need to look through countless listings on other the UAE’s property websites. We have gathered all available information about off-plan property in one place and created a short quiz for you to find your perfect home in less than two minutes. Follow simple steps on the screen to get your personal selection of projects that meet all your requirements. Explore any project in Dubai relevant to you and contact us!
    </div>

    
      <div className="flex">
      <button
        className="ml-32 mt-8 px-6 py-3 text-lg border rounded-full transition duration-300 bg-gold text-white hover:bg-white hover:text-black hover:border-black"
      >
        Take A Quick Test
      </button>
      <div className=" ml-12 mt-8 ">
      <div
        className="text-lg pr-6 "
      >
        It takes less than 2
      </div>
      <div className="text-xl">
       minutes
      </div>
      </div>
      </div>

  </div>
</div>

<div className="mt-32 flex items-center space-x-8 bg-neutral-800">
  <button className="px-6 py-3 text-lg border rounded-full transition duration-300 bg-gold text-white hover:bg-white hover:text-black hover:border-black items-center">
    Menu
  </button>
  <div className="relative inline-block">
  <button
    className="w-12 h-12 rounded-full text-center text-lg duration-500 font-semibold hover:bg-white hover:text-gold border-2 border-black" // Added border classes here
    onClick={() => setShowOptions(!showOptions)}
  >
    {selectedCurrency}
  </button>

  {showOptions && (
    <div
      className="absolute top-10 left-0 flex flex-col space-y-4 bg-white shadow-lg p-2 rounded-md z-10 animate-opacity"
      onMouseLeave={() => setShowOptions(false)}
    >
      {currencies
        .filter((currency) => currency !== selectedCurrency)
        .map((currency) => (
          <button
            key={currency}
            className="w-12 h-12 transition duration-500 rounded-full text-lg bg-white font-semibold text-black hover:bg-gold hover:text-white border-2 border-black" // Added border classes here as well
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


  <div>
  <img
    src={myAnotherPhoto}
    alt="Last Section"
    className="w-64 ml-64 mr-8"  
  />
</div>

<div className="flex">

<button
  className="px-6 py-6 text-lg border rounded-full transition duration-300 bg-gold text-white hover:bg-white hover:text-black hover:border-black ml-64 mr-8"
>
  PDF
</button>
<div className="mb-2 text-2xl text-white">
DOWNLOAD
BROCHURE
</div>
</div>
</div>
<div className="bg-neutral-800 text-white p-4">
  <div className="flex items-center space-x-2 mb-4">
    <button>
      <img 
        src="https://t4.ftcdn.net/jpg/03/74/26/91/240_F_374269197_JMCgbdnDUQkvuSG63DwJnzTmka6QTILd.jpg" 
        alt="Whatsapp Icon" 
        className="w-4 h-6"
      />
    </button>
    <span>Whatsapp</span>
  </div>

 
  <div className="text-center mr-36">
    <button
      className="px-6 py-3 text-lg border rounded-full transition duration-300 bg-gold text-white hover:bg-white hover:text-black hover:border-black"
    >
      +971 52 222 2105
    </button>
    <div className="mt-4">
    <div>
    PALM VIEW TOWER 1, GROUND FLOOR, R02
    </div>
    <div>
    DUBAI, UNITED ARAB EMIRATES
    </div>
    </div>
  </div>
</div>






    </>
  );
}

export default App;