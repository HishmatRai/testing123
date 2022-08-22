import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./../../pages";
const RouterNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RouterNavigation;
