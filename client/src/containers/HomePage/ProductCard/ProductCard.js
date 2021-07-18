import React from "react"
import { Row, Card, Button, Col } from "react-bootstrap"
import "./ProductCard.css"

const ProductCard = () => {
  return (
    <>
      <Row className='product-card-row'>
        <Col className='col-xl-6 col-sm-12 col-12 '>
          <Card className='product-card bg-dark '>
            <Card.Img src='/img/ProductCard/product1.png' alt='Card image' />
            <Card.ImgOverlay>
              <Card.Title>Fluence Minimal Speaker</Card.Title>
              <Card.Text>
                Just <span className='product-card-price'>$159.99</span>
              </Card.Text>
              <Button className='prod-btn btn-sm'>Shop Now</Button>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col className='col-xl-6 col-sm-12 col-12'>
          <Card className='product-card bg-dark'>
            <Card.Img src='/img/ProductCard/product2.png' alt='Card image' />
            <Card.ImgOverlay>
              <Card.Title>Voucher Body Car Eat Bratus Spa</Card.Title>
              <Card.Text>
                <span className='product-card-dis'>25%</span> Off
              </Card.Text>
              <Button className='prod-btn btn-sm'>Shop Now</Button>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductCard
