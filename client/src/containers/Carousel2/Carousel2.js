import React from "react";

// import './js/jquery.min.js'
// import './js/main'
// import './js/popper'
// import './js/owl.carousel.min.js'
// import OwlCarousel from 'react-owl-carousel';
import { Carousel, Row, Col,Image } from "react-bootstrap";

import work1 from "./images/work-1.jpg";
import work2 from "./images/work-2.jpg";
import work3 from "./images/work-3.jpg";
import work4 from "./images/work-4.jpg";

import "./css/style.css";
const Carousel2 = () => {
  return (
    <>
      <Carousel interval={null} className="mb-5 mt-5">
        <Carousel.Item>
          <Row className='carousel2row'>
            <Col className = 'carousel2' >
              <div>
            
              <h2>Ladies Collection</h2>
              <h3>Call: 01234 5678</h3>
              <h3>Email Address: email@info.com</h3>
              <p>
                Invidunt labore tempor accusam dolor voluptua elitr est sed sit
                sadipscing. Dolores at ut rebum accusam diam vero invidunt stet
                aliquyam. Sit ut elitr clita justo ea, no diam.
              </p>
            </div>
            </Col>
            <Col className = 'carousel2' style={{maxWidth:'50%'}}>
            <Image src= {work1} style={{width:'inherit'}}/>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className='carousel2row'>
            <Col className = 'carousel2' >
              <div>
            
              <h2>Ladies Collection</h2>
              <h3>Call: 01234 5678</h3>
              <h3>Email Address: email@info.com</h3>
              <p>
                Invidunt labore tempor accusam dolor voluptua elitr est sed sit
                sadipscing. Dolores at ut rebum accusam diam vero invidunt stet
                aliquyam. Sit ut elitr clita justo ea, no diam.
              </p>
            </div>
            </Col>
            <Col className = 'carousel2' style={{maxWidth:'50%'}}>
            <Image src= {work2} style={{width:'inherit'}}/>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className='carousel2row'>
            <Col className = 'carousel2' >
              <div>
            
              <h2>Ladies Collection</h2>
              <h3>Call: 01234 5678</h3>
              <h3>Email Address: email@info.com</h3>
              <p>
                Invidunt labore tempor accusam dolor voluptua elitr est sed sit
                sadipscing. Dolores at ut rebum accusam diam vero invidunt stet
                aliquyam. Sit ut elitr clita justo ea, no diam.
              </p>
            </div>
            </Col>
            <Col className = 'carousel2' style={{maxWidth:'50%'}}>
            <Image src= {work3} style={{width:'inherit'}}/>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Carousel2;
