import React from "react"
import { Row, Image, Container } from "react-bootstrap"

import "./BestSellerBrand.css"

const BestSellerBrand = () => {
  return (
    <>
      <Container className='bg-white best-seller-main-container'>
        <Container className=' p-0' style={{ overflow: "hidden" }}>
          <Row>
            {" "}
            <h4 style={{ marginTop: "35px", paddingLeft: "1rem" }}>
              Best Seller Brands
            </h4>
          </Row>
          <Row className=''>
            <Image fluid src='/img/bestseller.png' />
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default BestSellerBrand
