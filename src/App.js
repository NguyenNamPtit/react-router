import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TrangChu from "./pages/TrangChu";
import SanPham from "./pages/SanPham";
import TinTuc from "./pages/TinTuc";
import LienHe from "./pages/LienHe";
import NotFound from "./pages/NotFound";
import Layout from "./pages/Layout";
import "./acsets/style.css";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TrangChu />} />
          <Route path="san-pham" element={<SanPham />} />
          <Route path="tin-tuc" element={<TinTuc />} />
          <Route path="lien-he" element={<LienHe />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
