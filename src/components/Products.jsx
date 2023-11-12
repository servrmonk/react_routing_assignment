import React from "react";
import { Link } from "react-router-dom";



export default function Products() {
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
      {/* let if i click on book than productdetails should be open and it show book and below that some information regarding the books  same in second and third 
      http://localhost:3000/product-detail/:productId use this u'll get productid by using use param
       */}
         <li>A Book</li>
        <li>A Carpet</li>
        <li>An Online Course</li>

      </ul>
    </section>
  );
}
