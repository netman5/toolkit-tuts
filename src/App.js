import Navbar from "./components/Navbar";
import CartContainers from "./components/cartContainers";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal } from "./features/cart/cartSlice";
import {useEffect } from "react";
import Modal from "./components/Modal";

function App() {
  const{ cartItems } = useSelector((state) => state.cart);
  const {isOpen} = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems, dispatch]);

  return <main>
        {isOpen && <Modal />}
        <Navbar/>
        <CartContainers/>
      </main>;
}
export default App;
