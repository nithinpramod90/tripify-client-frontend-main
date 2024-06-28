import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircleIcon } from '@heroicons/react/solid'; // You can use heroicons or any other icon library

const PaymentSuccessPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <div className="bg-white p-10 rounded-xl ">
        <CheckCircleIcon className="w-20 h-20 text-green-500 mx-auto animate-bounce" />
        <h1 className="text-4xl font-bold mt-4">Payment Successful!</h1>
        <p className="text-gray-700 mt-2">Thank you for your purchase. Your payment has been processed successfully.</p>
      </div>
      <p className="text-gray-600 mt-4">Redirecting to the homepage in 5 seconds...</p>
    </div>
  );
};

export default PaymentSuccessPage;
