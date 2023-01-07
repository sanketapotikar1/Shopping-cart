import React from "react";
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { AddProduct } from "./AddProduct";
import { HomeScreen } from "./HomeScreen";

export function ShoppingHome({ productList,setProductList }) {
  const Navigate = useNavigate();
  return (
    <>

      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => Navigate("/")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => Navigate("/AddProduct")}>
            Add Product
          </Button>
        </Toolbar>
      </AppBar>

      <section className="section-container">
        <Routes>
          <Route
            path="/"
            element={<HomeScreen productList={productList} />}
          />
        </Routes>
        <Routes>
          <Route path="/AddProduct" element={<AddProduct productList={productList} setProductList={setProductList} />} />
        </Routes>
      </section>
    </>
  );
}


