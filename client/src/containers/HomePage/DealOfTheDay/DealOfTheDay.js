import React from "react"
import { Card, ListGroup, Row, Col } from "react-bootstrap"
import ProductGallery from "./ProductGallery/ProductGallery"
import "./DealOfTheDay.css"
import CountdownTimer from "./CountdownTImer/CountdownTimer"
import ProgressBar from "./ProgressBar/ProgressBar"

const DealOfTheDay = () => {
  return (
    <>
      <Card className='deal-of-the-day'>
        <Card.Title>Hot Deals Of The Day</Card.Title>
        <Row className='m-0'>
          <Col md={7} className='pr-0 pl-0'>
            <ProductGallery />
          </Col>
          <Col md={5} className='pr-0'>
            <ListGroup className='dotd-list-group'>
              <ListGroup.Item>
                <small>KOREA SOFA</small>
              </ListGroup.Item>
              <ListGroup.Item>
                <h6>Korea Long Sofa Fabric In Blue Navy Color</h6>
                <h4>
                  $2,099.90
                  <span className='ml-4 '>
                    <del>$2,899.90</del>
                  </span>
                </h4>
                <h6>
                  <span className='secondary'>10 Reviews</span>{" "}
                </h6>
                <h6>
                  Status: <span className='available'>In Stock</span>{" "}
                </h6>
              </ListGroup.Item>
              <ListGroup.Item>
                <CountdownTimer />
              </ListGroup.Item>
              <ListGroup.Item>
                <ProgressBar />
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Card>
    </>
  )
}

export default DealOfTheDay
