import React from "react";
import error from "../../../public/Error-animation.json";
import Lottie from "lottie-react";

const ErrorPage = () => {
  return (
    <div className="error_animation">
      <Lottie animationData={error} loop={true} />
    </div>
  );
};

export default ErrorPage;
