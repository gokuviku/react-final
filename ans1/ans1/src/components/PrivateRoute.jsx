import React from "react";
import { Link } from "react-router-dom";

const PrivateRoute = () => {
  return (
    <>
      <p className="font-weight-bold text-danger">
        <Link to="/" className="navbar-brand">
          PrivateRoute-> Go To Home
        </Link>
      </p>
    </>
  );
};

export default PrivateRoute;
