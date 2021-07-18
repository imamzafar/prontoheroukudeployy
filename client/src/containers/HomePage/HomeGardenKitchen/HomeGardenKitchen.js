import React from "react"
import { Card, Row, Col, Container } from "react-bootstrap"
import "./HomeGardenKitchen.css"

const HomeGardenKitchen = () => {
  return (
    <>
      <Container className='home-gar-kit-container pt-4 pb-4' fluid>
        <Container className='bg-white'>
          <Row className='mt-5 mb-5'>
            <h4 style={{ marginTop: "35px", paddingLeft: "1rem" }}>
              Home Garden & Kitchen
            </h4>
          </Row>
          <Row className='pb-4'>
            <Col className='col-lg-auto col-12'>
              <Card className='home-gar-kit-card'>
                <Card.Img className='' variant='top' src='/img/unnamed_1.png' />
                {/* <Card.Body className='home-gar-kit-main-body'>
                  <Card.Title>
                    <h6>TV Televisions </h6>
                    <small>302 items</small>
                  </Card.Title>
                </Card.Body> */}
              </Card>
            </Col>

            <Col className='col-lg-2'>
              <Card className='home-gar-kit-card'>
                <Card.Img
                  className='home-gar-kit-card-img'
                  variant='top'
                  src='/img/TopCatOfMonth/tcom (3).png'
                />
                <Card.Body>
                  <Card.Title className='home-gar-kit-card-title'>
                    <h6>TV Televisions </h6>
                    <small>302 items</small>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col className='col-lg-2'>
              <Card className='home-gar-kit-card'>
                <Card.Img
                  className='home-gar-kit-card-img'
                  variant='top'
                  src='/img/TopCatOfMonth/tcom (3).png'
                />
                <Card.Body>
                  <Card.Title className='home-gar-kit-card-title'>
                    <h6>TV Televisions </h6>
                    <small>302 items</small>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col className='col-lg-2'>
              <Card className='home-gar-kit-card'>
                <Card.Img
                  className='home-gar-kit-card-img'
                  variant='top'
                  src='/img/TopCatOfMonth/tcom (3).png'
                />
                <Card.Body>
                  <Card.Title className='home-gar-kit-card-title'>
                    <h6>TV Televisions </h6>
                    <small>302 items</small>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col className='col-lg-2'>
              <Card className='home-gar-kit-card'>
                <Card.Img
                  className='home-gar-kit-card-img'
                  variant='top'
                  src='/img/TopCatOfMonth/tcom (3).png'
                />
                <Card.Body>
                  <Card.Title className='home-gar-kit-card-title'>
                    <h6>TV Televisions </h6>
                    <small>302 items</small>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col className='col-lg-2'>
              <Card className='home-gar-kit-card'>
                <Card.Img
                  className='home-gar-kit-card-img'
                  variant='top'
                  src='/img/TopCatOfMonth/tcom (3).png'
                />
                <Card.Body>
                  <Card.Title className='home-gar-kit-card-title'>
                    <h6>TV Televisions </h6>
                    <small>302 items</small>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col className='col-lg-2'>
              <Card className='home-gar-kit-card'>
                <Card.Img
                  className='home-gar-kit-card-img'
                  variant='top'
                  src='/img/TopCatOfMonth/tcom (3).png'
                />
                <Card.Body>
                  <Card.Title className='home-gar-kit-card-title'>
                    <h6>TV Televisions </h6>
                    <small>302 items</small>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col className='col-lg-2'>
              <Card className='home-gar-kit-card'>
                <Card.Img
                  className='home-gar-kit-card-img'
                  variant='top'
                  src='/img/TopCatOfMonth/tcom (3).png'
                />
                <Card.Body>
                  <Card.Title className='home-gar-kit-card-title'>
                    <h6>TV Televisions </h6>
                    <small>302 items</small>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default HomeGardenKitchen
