import API from "../api";

const CreateOrder = () => {
  const handleOrder = async () => {
    try {

    const { data } = await API.post("/orders", {
      items: ["Gym Membership"],
      amount: 500
    });

    console.log("Order Created:", data);
    alert("Order created successfully!");

  } catch (err) {
    console.error(err);
    alert("Order failed");
  }
  };

  return (
    <div className="p-10 bg-[#F8F5F0] min-h-screen">
      <h2 className="text-2xl font-black uppercase italic italic mb-4">Checkout</h2>
      <button
        onClick={handleOrder}
        className="bg-black text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-orange-600 transition-all shadow-lg"
      >
        Place Order (₹500)
      </button>
    </div>
  );
};

export default CreateOrder;