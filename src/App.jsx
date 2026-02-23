// import Header from "./components/header/Header.jsx";
import Header from "@/components/header/Header.jsx";
import Main from "@/components/main/Main.jsx";
import Toast from "@/components/ui/Toast.jsx";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState(null);
  const [toast, setToast] = useState(null);

  function showToast(message, type = "info") {
    setToast({ message, type });
  }

  function handleDelete() {
    setCart(null);
  }

  function handleCheckout() {
    if (!cart) {
      showToast("Cart is empty", "warning");
      return;
    }

    setCart(null);
    showToast("Checkout complete", "success");
  }

  return (
    <>
      <Header
        cart={cart}
        onDelete={handleDelete}
        onCheckout={handleCheckout}
        showToast={showToast}
      />
      <Main setCart={setCart} showToast={showToast} />
      <Toast toast={toast} onDone={() => setToast(null)} duration={2500} />
    </>
  );
}

export default App;
