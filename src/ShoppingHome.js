import { Product } from "./Product";
import { TitleBar } from "./TitleBar";
import React,{useState} from "react";

export function ShoppingHome({ product_info }) {
  const [productCount, setProductCount] = useState(0);
  return (
    <div className="App">
      <TitleBar productCount={productCount} />

      {/* // for single Product */}
      {/* <Product Product_name={product_info.Product_name} Price={product_info.Price} Product_picture={product_info.Product_picture}  /> */}
      {/* <Product  product={product_info} /> */}
      <div className="App">
        {product_info.map((pd) => (
          <Product product={pd} productCount={productCount} setProductCount={setProductCount}/>
        ))}
      </div>
    </div>
  );
}
