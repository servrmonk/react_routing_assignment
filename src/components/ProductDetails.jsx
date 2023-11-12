import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {

const params = useParams();
console.log(params.productId);

  return (
    <section>
      <h1>Product Details</h1>
      <p>params.productId = {params.productId} </p>
    </section>
  )
}
