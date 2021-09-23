import React from "react";
import { Link } from "react-router-dom";

function ProductComponent({ product }) {
  return (
    <div className="four wide column">
      <Link to={`/product/${product.id}`}>
        <div className="ui link cards">
          <div className="card">
            <div className="image">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="content">
              <div className="header">{product.title}</div>
              <div className="meta price">$ {product.price}</div>
              <div className="meta">{product.category}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductComponent;
