import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import { setProducts } from "../redux/actions/productActions";

import ProductComponent from "./ProductComponent";

function ProductListing() {
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
      <ProductComponent />
    </div>
  );
}

export default ProductListing;
