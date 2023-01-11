import React from "react";
import Cards from "./Cards";
import NavBar from "./Navbar";

function Home(props) {
  return (
    <>
      <NavBar />

      <div className="container">
        {props.loggedIn ? (
          <h1 className="text-center mt-4">
            Welcome to the Shoppies, {props.loggedIn.email} !
          </h1>
        ) : null}

        <Cards />
      </div>
    </>
  );
}

export default Home;
