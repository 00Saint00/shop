import React from "react";
import { Link } from "react-router-dom";
import "./Categorypreview.scss";
import Product from "../Product-Card/Product";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="preview-container">
      <h2 className="text">
        <Link className="title" to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
