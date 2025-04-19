import React from "react";
import ImageSlider from "./ImageSlider";
import ProductList from "./ProductList";
import Partner from "../assets/partner.png";
import Delivery from "../assets/delivery.png";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-white pt-10 md:pt-16 mb-10">
      <ImageSlider />

      {/* Top 20 Best Sellers */}
      <ProductList />

      {/* Partner Section */}
      <div className="flex flex-col items-center mt-10 gap-5 px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl sm:text-3xl font-semibold text-center">
          Become a Partner with Us
        </h3>
        <img
          src={Partner}
          alt="Not Found"
          className="w-full max-w-xl h-auto object-cover rounded"
        />
      </div>

      {/* Text Sections */}
      {[
        {
          title: "Buy Air Coolers for the Indian climate",
          text: `Air coolers are the perfect appliances that you can install in a home and office. There are several types of air cooler – room/personal coolers, desert air coolers, tower air coolers … Air Cooler like, desert cooler, tower cooler are still preferred by many people as compared to air conditioners due to several reasons. One such would be the price tag. Air coolers are more economical than ACs. Other reasons are that air coolers do not make the air dry and are easy to install and portable. If you are looking to buy an air cooler for your home or office space, you have a wide variety to choose from. You can opt to buy air cooler online to beat the hot weather and keep your place cool.`,
        },
        {
          title: "Why Choose an Air Cooler?",
          text: `Today, when we talk about the hot summer, the first thing that comes to mind is an air conditioner. However, air coolers are ubiquitous and have been a family favorite for generations. Whether in the dry, arid summer of the northern states of India or the more humid southern parts, air coolers are a great solution. Cost-effective and efficient, the price point of an air cooler compared to its efficiency will surprise you.`,
        },
        {
          title: "How to choose an Air Cooler?",
          text: `Identifying your needs and requirements is the key point to choosing the best air cooler India. Important factors to consider are the room to be cooled, the number of people in your household, and any space or design constraints you may have.`,
        },
        {
          title: "Types of Air Cooler available in India",
          text: `When you are looking to buy an air cooler from an online platform, it is very important to know what is on offer and the advantages and disadvantages of each type. For instance, if you live in an area where summers are intense and dry, then your obvious choice should be from the Desert Air Cooler range. Powerful enough to cool large room size, these cooling beasts are usually installed on or near windows. On the other hand, for humid climates and smaller spaces, air cooler for room are perfect. They are small in size and light on the pocket. And, if you desire a cooling solution that can be carried around your home, you can go for a portable air cooler that comes with casters or a mini air cooler. Tower air coolers are perfect when you need cool air distributed at a certain height and spread over a certain area.`,
        },
        {
          title: "Buying Guide: What To Consider Before Buying An Air Cooler",
          text: `Arriving at the right option when choosing an air cooler online can be a challenge. You need to first identify the type that best suits your needs and look at the features on offer. Box Contents To make sure you have everything you need to install the cooler and operate it is equally important. Does the equipment come with adequate warranty and after-sales service? All these factors need careful consideration before arriving at a final decision. At Star Classic, you can find desert air coolers, tower air coolers, portable air coolers, smart air coolers and more.`,
        },
      ].map(({ title, text }, idx) => (
        <div
          key={idx}
          className="flex flex-col mt-10 gap-4 mx-auto max-w-5xl px-4"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-left">
            {title}
          </h3>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-left">
            {text}
          </p>
        </div>
      ))}

      {/* Final Section with Image */}
      <div className="flex flex-col mt-10 gap-4 mx-auto w-11/12 max-w-5xl items-center">
        <img
          src={Delivery}
          alt="Not Found"
          className=" mx-auto md:w-full max-w-xl md:h-[40vh] h-[30vh] object-cover rounded"
        />
        <h3 className="text-2xl sm:text-3xl font-semibold text-left">
          Why Choose Star Classic?
        </h3>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-left">
          At Star Classic, you can find desert air coolers, tower air coolers,
          portable air coolers, smart air coolers, and more wide range of air
          coolers to suit your needs and budget. You can buy air cooler online
          at the best prices in India. We also offer free shipping and easy
          returns on all orders. So, what are you waiting for? Buy air cooler
          online today and beat the heat this summer!
        </p>
      </div>
    </div>
  );
};

export default Home;
