import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, useFormik } from "formik";
import * as yup from "yup";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export function AddProduct({ productList, setProductList }) {
  const [name, setName] = useState("");
  const [Price, setPrice] = useState("");
  const [Image, setImage] = useState("");

  const Navigate = useNavigate();

  const addProduct = (NewProduct) => {
    const newProduct = {
      Product_name: NewProduct.Product_name,
      Price: `$${NewProduct.Price}`,
      Product_picture: NewProduct.Product_picture,

      //Sample Product
      // Product_name: "sample",
      // Price: "$40.00 - $80.00",
      // Product_picture: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
    };

    setProductList([newProduct, ...productList]);
  };

  const ProductValidationSchema = yup.object({
    Product_name: yup
      .string()
      .required("why not fill this name? ")
      .min(3, " Please give bigger Product name"),
    Product_picture: yup
      .string()
      .required("why not fill this Product Image link?")
      .min(6, "need bigger Product Image link"),
    Price: yup
      .number()
      .required("why not fill this Price?")
      .min(1, "need bigger Price"),
  });

  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        Product_name: "",
        Product_picture: "",
        Price: "",
      },
      validationSchema: ProductValidationSchema,
      onSubmit: (NewProduct) => {
        console.log("onSubmit method", NewProduct);
        addProduct(NewProduct);
        Navigate("/");
      },
    });

  return (
    <form onSubmit={handleSubmit} className="Add-movie-form">
      <TextField
        label="Product Name"
        variant="standard"
        name="Product_name"
        value={values.Product_name}
        onChange={handleChange}
        onBlur={handleBlur}
        helperText={
          touched.Product_name && errors.Product_name ? errors.Product_name : ""
        }
        error={touched.Product_name && errors.Product_name ? true : false}
      />

      <TextField
        label="Price"
        variant="standard"
        name="Price"
        value={values.Price}
        onChange={handleChange}
        onBlur={handleBlur}
        helperText={touched.Price && errors.Price ? errors.Price : ""}
        error={touched.Price && errors.Price ? true : false}
      />

      <TextField
        label="Product Image"
        variant="standard"
        name="Product_picture"
        value={values.Product_picture}
        onChange={handleChange}
        onBlur={handleBlur}
        helperText={
          touched.Product_picture && errors.Product_picture
            ? errors.Product_picture
            : ""
        }
        error={touched.Product_picture && errors.Product_picture ? true : false}
      />

      <Button className="submit-btn" type="submit" variant="outlined">
        Add Product
      </Button>
    </form>
  );
}
