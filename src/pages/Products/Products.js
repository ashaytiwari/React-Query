import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <h4>Products Page</h4>
      <ul>
        <li>
          <Link to={"/products/book"}>A Book</Link>
        </li>
        <li>
          <Link to={"/products/pen"}>A Pen</Link>
        </li>
        <li>
          <Link to={"/products/carpet"}>A Carpet</Link>
        </li>
      </ul>
    </div>
  );
};

export default Products;
