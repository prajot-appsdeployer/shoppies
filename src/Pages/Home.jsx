import React, { useContext, useEffect, useState } from "react";
import Cards from "../components/Home/Cards";
import { GlobalContext } from "../context/Context";
import { getDocs, collection, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";
// import axios from "axios";
// import Button from "react-bootstrap/esm/Button";

function Home() {
  const { userState } = useContext(GlobalContext);
  const [products, setProducts] = useState([]);

  const Api = async () => {
    // to call data from firestore database
    const items = query(collection(db, "products"), orderBy("id"));
    const querySnapshot = await getDocs(items);

    let list = [];
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data());
      list.push(doc.data());
    });
    setProducts(list);

    //  to call data from api
    // const res = await axios.get("https://fakestoreapi.com/products/");
    // setProducts(res.data);
  };

  useEffect(() => {
    Api();
  }, []);

  return (
    <>
      <div className="container ">
        {userState ? (
          <h1 className="text-center mt-3 mb-3 display-6 fs-4">
            Welcome to the Shoppies, {userState.displayName}!
          </h1>
        ) : null}

        <h1 className="text-center mt-4 display-3">Store</h1>

        {/* <Button
          variant="danger"
          onClick={() => {
            products.forEach((item) => {
              const productData = doc(db, "products", "" + item.id);
              setDoc(productData, item).catch((err) =>
                console.log(err.message)
              );
            });
          }}
        >
          Copy
        </Button> */}

        <div className="mt-3 row justify-content-center gap-5 mb-5">
          {products.map((product) => {
            product.quantity = 1;
            return <Cards key={product.id} {...product} product={product} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
