import { Product } from "./Product";
import { TitleBar } from "./TitleBar";
import React, { useState } from "react";

export function HomeScreen({ productList }) {
  const [productCount, setProductCount] = useState(0);
  return (
    <div className="App">
      <TitleBar productCount={productCount} />
      <div className="App">
        {productList.map((pd) => (
          <Product
            product={pd}
            productCount={productCount}
            setProductCount={setProductCount} />
        ))}
      </div>
    </div>
  );
}
