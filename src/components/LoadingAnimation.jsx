import React from "react";
import "../css/LoadingAnimation.css";

function LoadingAnimation() {
  return (
    <div className="loader-container">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default LoadingAnimation;
