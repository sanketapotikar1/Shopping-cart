import React from "react";

export function Product({product,productCount,setProductCount}) {



  const addTOCart = ()=>{
    setProductCount(productCount + 1);
  }
  console.log(productCount);


  return (
    <div className="Product-box">
      <div className="Product-image">
        <img src={product.Product_picture} alt={product.Product_name}></img>
      </div>
      <h3>{product.Product_name}</h3>
      <p>{product.Price}</p>
      <button class="Add-to-cart-btn"
      onClick={addTOCart}
      >Add to cart</button>
    </div>
  );
}
