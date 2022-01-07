import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();

  return (
    <div>
      <h4>Product Details</h4>
      <p>{params.id}</p>
    </div>
  );
};

export default ProductDetails;
