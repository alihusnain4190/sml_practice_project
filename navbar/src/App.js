import React from "react";
import CartContainer from "./Componets/CartContainer";
import { useGlobalContext } from "./context";

function App() {
  const { isLoading } = useGlobalContext();
  if (isLoading) return <h1>Loading....</h1>;
  return (
    <>
      <CartContainer></CartContainer>
    </>
  );
}

export default App;
