"use-client";
import React from "react";
import { Meteors } from "@/app/components/ui/meteors";

const Page = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative w-full min-h-screen">
        <div className="absolute inset-0 min-h-screen w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 blur-3xl" />
        <div className="relative shadow-xl min-h-screen bg-gray-900 border border-gray-800 px-4  h-full overflow-hidden flex flex-col justify-center items-center">

          <h1 className="font-bold text-xl text-white mb-4">
            Contact Us
          </h1>

          <p className="font-normal text-base text-slate-500 mb-4">
            I don&apos;t know what to write so I&apos;ll just paste something
            cool here.
          </p>

          <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300">
            Explore
          </button>

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
};

export default Page;
