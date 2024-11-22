import React, { useState } from "react";
import "./App.css"
import myPhoto from "./Photos/penthouse-logo.jpg";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("AED");
  const [showOptions, setShowOptions] = useState(false);
  const currencies = ["AED","USD", "EUR", "RUB"];

  return (
    <>

    {/* Component-1 */}
    <div className="w-full overflow-hidden">
      <img
        className="h-[840px] transform scale-x-150 translate-x-4"
        src="https://penthouse.ae/wp-content/uploads/2023/03/Palm-flower-11-1.jpg"
        alt="Palm flower"
      />
      <div className="absolute top-0 text-white">
        <nav className="flex justify-between items-center h-40 w-screen border-b border-neutral-500">
          <div className="flex justify-center items-center ml-12 space-x-32 relative">
            <button onClick={() => setIsOpen(true)}>
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
            <button onClick={() => setIsOpen(true)} className="hover:text-gold transition duration-500">
              Log in
            </button>
            <button onClick={() => setIsOpen(true)} className="transition duration-500 hover:text-gold">
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
  <button onClick={() => setIsOpen(true)}
    className="px-6 py-3 text-lg border rounded-full transition duration-300 bg-gold text-white hover:bg-white hover:text-black hover:border-black ">
    Discover more
  </button>

  <button  onClick={() => setIsOpen(true)}
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
<button onClick={() => setIsOpen(true)}
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

<div className="flex flex-row  mb-56">
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


  <button onClick={() => setIsOpen(true)}
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
<button onClick={() => setIsOpen(true)}
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
  <button onClick={() => setIsOpen(true)}
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
   <button className="bg-gold text-xl font-bold h-14 w-14 text-white">  6 Br </button>
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
      <button onClick={() => setIsOpen(true)}
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




<div className="bg-black text-white flex flex-col items-center justify-center">
      <div className="flex justify-between w-full pt-16 ">
        <div>
        <button  onClick={() => setIsOpen(true)} className="bg-gold text-xl h-12 font-semibold w-32 rounded-full text-black mt-12 ml-12">
          MENU
        </button>
        <div className="flex mt-6 items-center">
        <button className=" ml-8 w-12 h-12 transition duration-500 flex justify-center items-center rounded-full hover:bg-gold ">
              <img 
                width="24"
                src="https://img.icons8.com/material-outlined/24/FFFFFF/whatsapp--v1.png"
                alt="whatsapp"
              />
            </button>
            <span className="pl-6 text-xl">  Whatsapp</span>
        </div>
        </div>
        <div className="scale-75 ml-16">
          <img src="data:image/jpeg;base64,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"></img>
        </div>
        <div className="flex items-center mr-12">
          <button  onClick={() => setIsOpen(true)}
          className="bg-gold text-black text-2xl font-semibold h-20 w-20 rounded-full hover:bg-white hover:text-gold">
            PDF
          </button>
          <div className="ml-4">
          <div className="text-white text-xl mt-1">DOWNLOAD </div>
           <div className="text-white text-xl mt-1">BROCHURE</div>
          </div>



          {isOpen && (
        <div className="fixed inset-x-0 top-8 bottom-8 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-lg p-6 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Us</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-medium text-gray-700">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-medium text-gray-700">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block font-medium text-gray-700">
                  Phone:
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-medium text-gray-700">
                  Message:
                </label>
                <textarea
                  id="message"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Write your message"
                  rows="2"
                ></textarea>
              </div>

              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="h-4 w-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500"
                  />
                  <label htmlFor="privacy" className="ml-2 text-gray-700">
                    I accept the Privacy Policy.
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="offers"
                    className="h-4 w-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500"
                  />
                  <label htmlFor="offers" className="ml-2 text-gray-700">
                    I agree to receive updates.
                  </label>
                </div>
              </div>

        
              <button
                type="submit"
                className="w-full bg-gold text-white font-semibold py-2 rounded-md hover:bg-white hover:text-black hover:border hover:border-black"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
        </div>
      </div>



      <div className="flex flex-col items-center mt-12 text-center pb-32">
        <p className="text-gold text-6xl mb-8">
          +971 52 222 2105
        </p>
        <p className="text-white text-lg">
          PALM VIEW TOWER 1, GROUND FLOOR, R02 <br />
          DUBAI, UNITED ARAB EMIRATES
        </p>
      </div>
    </div>

    </>
  );
}

export default App;