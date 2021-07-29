// imported n homepage
import React from "react";
import { Carousel } from "react-bootstrap";
// import "./CarouselItemStory.css";

const CarouselItemStory = () => {
  return (
    <>
      {" "}
      <div style={{ marginTop: "4rem", marginBottom: "6rem" }}>
        <Carousel interval={null} className="mb-5 mt-5" fluid>
          <Carousel.Item>
            <div className="story__content">
              <h2 className="story__content__title">
                One family, three kids &amp; too much to do
              </h2>{" "}
              <div className="story__content__description">
                <p>Gopuff helps parents power through their days</p>
              </div>
            </div>
            <div className="story__img__wrapper">
              <img
                data-src="https://imgix.cosmicjs.com/72e13400-0e31-11eb-9f4c-e15314e49fa9-Derek2x.jpg?q=75&auto=compress,format,&w=800&h=503"
                alt="One family, three kids & too much to do"
                width={800}
                height={503}
                className="story__img lazyloaded"
                src="https://imgix.cosmicjs.com/72e13400-0e31-11eb-9f4c-e15314e49fa9-Derek2x.jpg?q=75&auto=compress,format,&w=800&h=503"
              />
            </div>
            <div className="story__person-name__wrapper">
              <div className="story__person-name font-black">Derek</div>
            </div>

            <a
              href="https://gopuff.com/blog/saves-the-day/one-family-three-kids-too-much-to-do"
              className="puff-cta story__link"
            >
              Read the Full Story
            </a>
            <div className="dark-blue-bg stories__bg absolute w-full md:w-3/6 left-0 top-0 stories__bg--index-1" />
          </Carousel.Item>
          <Carousel.Item>
            <div className="story__content">
              <h2 className="story__content__title">
                One family, three kids &amp; too much to do
              </h2>{" "}
              <div className="story__content__description">
                <p>Gopuff helps parents power through their days</p>
              </div>
            </div>
            <div className="story__img__wrapper">
              <img
                data-src="https://imgix.cosmicjs.com/72e13400-0e31-11eb-9f4c-e15314e49fa9-Derek2x.jpg?q=75&auto=compress,format,&w=800&h=503"
                alt="One family, three kids & too much to do"
                width={800}
                height={503}
                className="story__img lazyloaded"
                src="https://imgix.cosmicjs.com/72e13400-0e31-11eb-9f4c-e15314e49fa9-Derek2x.jpg?q=75&auto=compress,format,&w=800&h=503"
              />
            </div>
            <div className="story__person-name__wrapper">
              <div className="story__person-name font-black">Derek</div>
            </div>

            <a
              href="https://gopuff.com/blog/saves-the-day/one-family-three-kids-too-much-to-do"
              className="puff-cta story__link"
            >
              Read the Full Story
            </a>
            <div className="dark-blue-bg stories__bg absolute w-full md:w-3/6 left-0 top-0 stories__bg--index-1" />
          </Carousel.Item>{" "}
          <Carousel.Item>
            <div className="story__content">
              <h2 className="story__content__title">
                One family, three kids &amp; too much to do
              </h2>{" "}
              <div className="story__content__description">
                <p>Gopuff helps parents power through their days</p>
              </div>
            </div>
            <div className="story__img__wrapper">
              <img
                data-src="https://imgix.cosmicjs.com/72e13400-0e31-11eb-9f4c-e15314e49fa9-Derek2x.jpg?q=75&auto=compress,format,&w=800&h=503"
                alt="One family, three kids & too much to do"
                width={800}
                height={503}
                className="story__img lazyloaded"
                src="https://imgix.cosmicjs.com/72e13400-0e31-11eb-9f4c-e15314e49fa9-Derek2x.jpg?q=75&auto=compress,format,&w=800&h=503"
              />
            </div>
            <div className="story__person-name__wrapper">
              <div className="story__person-name font-black">Derek</div>
            </div>

            <a
              href="https://gopuff.com/blog/saves-the-day/one-family-three-kids-too-much-to-do"
              className="puff-cta story__link"
            >
              Read the Full Story
            </a>
            <div className="dark-blue-bg stories__bg absolute w-full md:w-3/6 left-0 top-0 stories__bg--index-1" />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default CarouselItemStory;
