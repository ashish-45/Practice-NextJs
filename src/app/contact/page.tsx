"use-client";
import React from "react";
import { Meteors } from "@/app/components/ui/meteors";
import { Input } from "@/app/components/ui/input"

const Page = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative w-full min-h-screen">
        <div className="absolute inset-0 min-h-screen w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 blur-3xl" />
        <div className="relative shadow-xl min-h-screen bg-gray-900 border border-gray-800 px-4  h-full overflow-hidden flex flex-col justify-center items-center">

          <h1 className="font-bold text-5xl text-white mb-4">
            Contact Us
          </h1>

          <p className="font-normal text-base text-white-500 mb-4">
            I don&apos;t know what to write so I&apos;ll just paste something
            cool here.
          </p>
          <Input id="email" placeholder="Your Email" type="email" className="bg-black-700 w-96" />
          <Input id="email" placeholder="Write Message" type="email" className="bg-black-700 w-96 h-20 mt-4" />


          <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300 mt-4">
            Submit
          </button>

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
};

export default Page;
