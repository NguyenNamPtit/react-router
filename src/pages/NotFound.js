import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <h1>
      Trang khong ton tai.Quay ve trang chu <Link to={"/"}>tại đây</Link>{" "}
    </h1>
  );
};

export default NotFound;
