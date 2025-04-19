import React from "react";
import { Tv } from "lucide-react"; // lucide-react provides modern icons

const Ledtvs = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-[#1A2980] to-[#26D0CE] flex items-center justify-center px-4">
      <div className="max-w-xl text-center">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-indigo-100 text-indigo-600 p-4 rounded-full shadow-lg">
            <Tv className="w-10 h-10" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          LED TVs Launching Soon
        </h1>
        <p className="text-lg text-white mb-8">
          We’re working hard to bring you the best LED TV experience. Stay tuned
          for incredible visuals, modern designs, and unbeatable prices.
        </p>
        <button className="px-6 py-3 bg-indigo-600 text-white rounded-2xl text-lg shadow-md hover:bg-indigo-700 transition">
          Notify Me
        </button>

        {/* Optional Countdown Placeholder */}
        {/* <div className="mt-10 text-gray-500">
          Launching in: <span className="font-semibold">00d : 00h : 00m : 00s</span>
        </div> */}
      </div>
    </div>
  );
};

export default Ledtvs;
