import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Header = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Trang Chủ</Link>
          </li>
          <li>
            <Link to={"san-pham"}>Sản Phẩm</Link>
          </li>
          <li>
            <Link to={"tin-tuc"}>Tin Tức</Link>
          </li>
          <li>
            <Link to={"lien-he"}>Liên Hệ</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
