import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";
import { CartContext } from "../context/Context";

function Home(props) {
  const [products, setProducts] = useState([]);

  const Api = async () => {
    const res = await axios.get("https://fakestoreapi.com/products/");
    setProducts(res.data);
  };

  useEffect(() => {
    Api();
  }, []);

  const GlobalState = useContext(CartContext);
  const dispatch = GlobalState.dispatch;

  return (
    <>
      <div className="container ">
        {props.loggedIn ? (
          <h1 className="text-center mt-4">
            Welcome to the Shoppies, {props.loggedIn.email} !
          </h1>
        ) : null}

        <div className="mt-5 row justify-content-center gap-5 mb-5">
          {products.map((product) => {
            product.quantity = 1;
            return (
              <Cards
                key={product.id}
                {...product}
                product={product}
                dispatch={dispatch}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
