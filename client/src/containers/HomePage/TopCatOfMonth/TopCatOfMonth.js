import React from "react"
import { Row, Card, Col } from "react-bootstrap"
import "./TopCatOfMonth.css"

const TopCatOfMonth = () => {
  return (
    <>
      <div className='mt-4'>
        <h5>Top Categories Of The Month</h5>
        <Row>
          <Col>
            <Card className='text-center tcom-card'>
              <Card.Img variant='top' src='/img/TopCatOfMonth/tcom (3).png' />
              <Card.Body>
                <Card.Title>
                  <h6>TV Televisions </h6>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='text-center tcom-card'>
              <Card.Img variant='top' src='/img/TopCatOfMonth/tcom (2).png' />
              <Card.Body>
                <Card.Title>
                  <h6>Air Conditioners</h6>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='text-center tcom-card'>
              <Card.Img variant='top' src='/img/TopCatOfMonth/tcom (3).png' />
              <Card.Body>
                <Card.Title>
                  <h6>Furniture</h6>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='text-center tcom-card'>
              <Card.Img variant='top' src='/img/TopCatOfMonth/tcom (4).png' />
              <Card.Body>
                <Card.Title>
                  <h6>Clothing & Apparel</h6>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='text-center tcom-card'>
              <Card.Img variant='top' src='/img/TopCatOfMonth/tcom (5).png' />
              <Card.Body>
                <Card.Title>
                  <h6>Computers</h6>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='text-center tcom-card'>
              <Card.Img variant='top' src='/img/TopCatOfMonth/tcom (6).png' />
              <Card.Body>
                <Card.Title>
                  <h6>Health & Beauty</h6>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default TopCatOfMonth
