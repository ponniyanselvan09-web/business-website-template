import React from "react";

const PaymentForm = () => {
  console.log("Payment");
  return (
    <div
      id="credit-card"
      tabIndex={"-1"}
      aria-hidden="true"
      className="hidden overflow-y-auto fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative p-4 w-full max-w-md max-h-full border-red-300">
        <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700"></div>
      </div>
    </div>
  );
};

export default PaymentForm;
