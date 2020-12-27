import React from "react";
import CartContainer from "./Componets/CartContainer";
import Navbar from "./Componets/Navbar";
import { useGlobalContext } from "./context";

function App() {
  const { isLoading } = useGlobalContext();
  if (isLoading) return <h1>Loading....</h1>;
  return (
    <>
      <Navbar />
      <CartContainer></CartContainer>
    </>
  );
}

export default App;
