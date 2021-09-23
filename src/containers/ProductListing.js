import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import { setProducts } from "../redux/actions/productActions";

import ProductComponent from "./ProductComponent";

function ProductListing() {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log("Error", err));
    dispatch(setProducts(response.data));
  };

  return (
    <div className="ui grid container">
      {Object.keys(products).length === 0 ? (
        <div>Loading...</div>
      ) : (
        products.map((product) => (
          <ProductComponent key={product.id} product={product} />
        ))
      )}
    </div>
  );
}

export default ProductListing;
