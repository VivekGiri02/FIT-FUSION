import React from "react";
import API from "../../api";

const Payment = ({ amount }) => {

  const handlePaymentSuccess = async (response) => {
    try {
      console.log("Payment Success:", response);
      console.log("Calling backend...");

      const { data } = await API.post("/orders", {
        items: ["Gym Membership"],
        amount: amount,
        paymentId: response.razorpay_payment_id,
        status: "completed",
      });

      console.log("Order saved:", data);
      alert("Payment Successfully!");

    } catch (err) {
      console.error("FULL ERROR:", err);
      console.error("DATA:", err.response?.data);
      alert("Order not saved, check console!");
    }
  };

  // PAYMENT FunCTion
  const handlePayment = () => {
    const options = {
      key: "rzp_test_STnFI3BDJwzgkg",
      amount: amount * 100,
      currency: "INR",
      name: "FIT-FUSION",
      description: "Membership Payment",

      handler: function (response) {
        console.log("Payment Success:", response);
        handlePaymentSuccess(response);
      },

      prefill: {
        name: "Vivek",
        email: "test@gmail.com",
      },

      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <button
      onClick={handlePayment}
      className="bg-green-500 text-white px-6 py-3 rounded-lg w-full"
    >
      Pay ₹{amount}
    </button>
  );
};

export default Payment;