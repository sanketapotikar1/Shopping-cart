import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import React from "react";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import AddIcon from "@mui/icons-material/Add";

export function TitleBar({ productCount }) {
  return (
    <>
      <div className="title-bar">
        <div className="Add-form">
          <Button variant="outlined" startIcon={<AddIcon />}>
            Add Product
          </Button>
        </div>

        <div className="title">
          <h1>Shop in style</h1>
          <h4>Shop what you wanted.</h4>
        </div>

        <div className="Cart-btn">
          <Badge badgeContent={productCount} color="primary">
            <Button variant="outlined" startIcon={<AddShoppingCartIcon />}>
              Cart
            </Button>
          </Badge>
        </div>
      </div>
    </>
  );
}
