import React from "react";
import axios from "axios";

function App() {
  const handleCheckout = async () => {
    try {
      // Call your backend to create checkout session
      const { data } = await axios.post("http://localhost:5000/create-checkout-session");
      
      // 🚀 Direct redirect to Stripe Checkout
      window.location.href = data.url;
    } catch (err) {
      console.error("Checkout error:", err);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Stripe Payment Demo (Vite + React)</h2>
      <button
        onClick={handleCheckout}
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
      >
        Buy React T-Shirt ($20)
      </button>
    </div>
  );
}

export default App;
