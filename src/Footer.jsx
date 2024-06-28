import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Footer = () => {

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const onclick = () => {
    toast.error('Return is not applicable')
  }

  return (
    <footer className="bg-gray-100 py-12">
      <div className=" mx-auto px-4  lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-3">
            <img src="/TRIP999Artboard 1@4x (1).png" alt="Logo" className="w-32" />
            <p className="text-sm font-bold">By QATAYWORLD PVT LTD</p>
            <p className="text-gray-600 text-sm">
              Book your trip in minutes, get full control for much longer.
            </p>
            <div className="flex space-x-4">
              <img
                src="play-removebg-preview-3.png"
                alt="App Store"
                className="w-24"
              />
              <img
                src="play-removebg-preview-4.png"
                alt="Google Play"
                className="w-24"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <h2 className="text-gray-800 text-xl font-bold">Company</h2>
            <a href="/TermsOf-ServicePage" className="text-gray-600">
              Terms and Conditions
            </a>
            <a href="/Privacy-Policy" className="text-gray-600">
              Privacy Policy
            </a>
            <a href="/Return-Policy" className="text-gray-600">
              Refund Policy
            </a>
            <a onClick={onclick} className="text-gray-600 cursor-pointer">
              Return
            </a>
          </div>

          <div className="flex flex-col space-y-2 ">
            <h2 className="text-gray-800 text-xl font-bold">Reach Us</h2>
            <div className="flex items-center space-x-4">
              <img src="/email.png" alt="" className="w-5" />
              <p className="text-gray-800">sales@tripifyme.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <img src="/phone-call.png" alt="" className="w-5" />

              <p className="text-gray-800">+91 90721 21217</p>
            </div>
            <div className="flex items-center space-x-4">
              <img src="/phone-call.png" alt="" className="w-5" />

              <p className="text-gray-800">+91 90720 21217</p>
            </div>
            <div className="flex items-center space-x-4">
              <img src="/phone-call.png" alt="" className="w-5" />
              <p className="text-gray-800">+91 90722 21217</p>
            </div>
          </div>

          <div className="relative flex flex-col space-y-2">
            <h3 className="text-gray-800 text-lg font-bold">Locations</h3>
            <div
              className="text-gray-600 cursor-pointer hover:underline"
              onMouseEnter={toggleModal}
              onMouseLeave={toggleModal}
            >
              <p>Bengaluru</p>
              <p>Kochi</p>
              <p>Pathanamthitta</p>
              <p>Delhi</p>
            </div>
            {showModal && (
              <div className="absolute bg-white shadow-md rounded-lg p-4 top-0 left-32 z-10">
                <h3 className="text-gray-800 text-lg font-bold mb-2">Locations</h3>
                <p className="text-gray-600">Bengaluru</p>
                <p className="text-gray-600">Kochi</p>
                <p className="text-gray-600">Pathanamthitta</p>
                <p className="text-gray-600">Delhi</p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 ">

          <div className=" md:flex items-end md:justify-end ">
            <p className="text-gray-600 text-lg lg:mt-0 text-center pt-5">
              All rights reserved@tripify.in
            </p>
          </div>
        </div>
      </div>
      <Toaster />
    </footer>
  );
};

export default Footer;
