import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const Footer = () => {
  return (
    <footer>
      <Container fluid className='text-center text-md-left bg-light'>
        <Container>
          <Row>
            <Col>
              <h5 className='title'>Footer Content</h5>
              <p>
                Here you can use rows and columns here to organize your footer
                content.
              </p>
            </Col>
            <Col>
              <h5 className='title'>Footer Content</h5>
              <p>
                Here you can use rows and columns here to organize your footer
                content.
              </p>
            </Col>
            <Col>
              <h5 className='title'>Footer Content</h5>
              <p>
                Here you can use rows and columns here to organize your footer
                content.
              </p>
            </Col>
            <Col>
              <h5 className='title'>Links</h5>
              <ul>
                <li className='list-unstyled'>
                  <a href='#!'>Link 1</a>
                </li>
                <li className='list-unstyled'>
                  <a href='#!'>Link 2</a>
                </li>
                <li className='list-unstyled'>
                  <a href='#!'>Link 3</a>
                </li>
                <li className='list-unstyled'>
                  <a href='#!'>Link 4</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
      <div className='footer-copyright text-center py-3'>
        <Container fluid className='bg-light'>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href='https://www.mdbootstrap.com'> MDBootstrap.com </a>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
