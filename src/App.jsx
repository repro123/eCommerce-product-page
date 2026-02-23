// import Header from "./components/header/Header.jsx";
import Header from "@/components/header/Header.jsx";
import Main from "@/components/main/Main.jsx";
import Toast from "@/components/ui/Toast.jsx";
import { useState } from "react";

function App() {
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [CartQuantity, setCartQuantity] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [cart, setCart] = useState(null);
  const [toast, setToast] = useState(null);

  function showToast(message, type = "info") {
    setToast({ message, type });
  }

  function handleDelete() {
    setCart(null);
    setCartQuantity(0);
  }

  function handleCheckout() {
    if (!cart) {
      showToast("Cart is empty", "warning");
      return;
    }

    setCart(null);
    setCartQuantity(0);
    setNumberOfItems(0);
    showToast("Checkout complete", "success");
  }

  return (
    <>
      <Header
        cart={cart}
        numberOfItems={numberOfItems}
        CartQuantity={CartQuantity}
        setCartQuantity={setCartQuantity}
        setNumberOfItems={setNumberOfItems}
        onDelete={handleDelete}
        onCheckout={handleCheckout}
        showToast={showToast}
      />
      <Main
        numberOfItems={numberOfItems}
        setNumberOfItems={setNumberOfItems}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
        CartQuantity={CartQuantity}
        setCartQuantity={setCartQuantity}
        setCart={setCart}
        showToast={showToast}
        onCheckout={handleCheckout}
      />
      <Toast toast={toast} onDone={() => setToast(null)} duration={2500} />
    </>
  );
}

export default App;
