import { Container, Col } from "react-bootstrap";
import React from "react";
import "./CallToAction.css";

const CallToAction = () => {
  return (
    <>
      <Container>
        <div className="calltoaction-flex">
          <Col className="col-md-6 col-6">
            <img
              style={{ height: "inherit", width: "inherit" }}
              data-src="https://imgix.cosmicjs.com/57369d80-8cad-11eb-a3a5-d7bcaab537a6-driver2x.jpg"
              alt="Become a driver-partner"
              className="w-full h-auto ls-is-cached lazyloaded"
              src="https://imgix.cosmicjs.com/57369d80-8cad-11eb-a3a5-d7bcaab537a6-driver2x.jpg"
            />
          </Col>
          <Col className="col-md-6 col-6">
            <div class="call-to-actions__content-container w-1/2 flex flex-col items-center justify-center px-6">
              <div class="content">
                <h2 class="call-to-actions__title">Become a driver-partner</h2>{" "}
                <div class="call-to-actions__copy">
                  <p>Make reliable money. Work any time.</p>
                </div>{" "}
                <a
                  href="https://www.fountain.com/gopuff/apply/godrive-delivery-partner"
                  class="puff-cta"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </Col>
        </div>
      </Container>

      <Container>
        <div className="calltoaction-flex">
          <Col className="col-md-6 col-6">
            <div class="call-to-actions__content-container w-1/2 flex flex-col items-center justify-center px-6">
              <div class="content">
                <h2 class="call-to-actions__title">Partner with Gopuff</h2>{" "}
                <div class="call-to-actions__copy">
                  <p>Take your brand to the next level.</p>
                </div>{" "}
                <a
                  href="https://www.fountain.com/gopuff/apply/godrive-delivery-partner"
                  class="puff-cta"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </Col>{" "}
          <Col className="col-md-6 col-6">
            <img
              style={{ height: "inherit", width: "inherit" }}
              data-src="https://imgix.cosmicjs.com/b00d49d0-8ccc-11eb-a3a5-d7bcaab537a6-partner2x.jpg"
              alt="Become a driver-partner"
              className="w-full h-auto ls-is-cached lazyloaded"
              src="https://imgix.cosmicjs.com/b00d49d0-8ccc-11eb-a3a5-d7bcaab537a6-partner2x.jpg"
            />
          </Col>
        </div>
      </Container>
    </>
  );
};

export default CallToAction;
