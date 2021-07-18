import React from "react"
import "./Top20BestSeller.css"
import { Card } from "react-bootstrap"
import ProductCarousel from "../ProductCarousel/ProductCarousel"

const Top20BestSeller = () => {
  return (
    <>
      <Card className='top20bestseller'>
        <ProductCarousel />
      </Card>
    </>
  )
}

export default Top20BestSeller
