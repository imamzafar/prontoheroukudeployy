import React from "react";
import { Container, ListGroup, Button } from "react-bootstrap";

import "./DownloadMartfuryApp.css";

const DownloadMartfuryApp = () => {
  return (
    <>
      <Container style={{ position: "relative", marginBottom: "6rem" }}>
        <div style={{ display: "flex" }}></div>

        <div
          className="downloads__content w-full"
          style={{ position: "absolute", marginLeft: "2rem", top: "40%" }}
        >
          <h2 className="downloads__title text-white mb-4">
            EVERYDAY ESSENTIALS,
            <br />
            DELIVERED.
          </h2>{" "}
          <div className="downloads__store__wrapper">
            <div className="downloads__store mr-4 mb-2">
              <a
                href="https://itunes.apple.com/us/app/gopuff/id722804810?mt=8"
                title="Download the appstore App"
              >
                <img
                  data-src="https://cdn.cosmicjs.com/91ecd230-d604-11e8-b0eb-f914cb315e67-apple.svg"
                  alt="appstore"
                  width={150}
                  height={46}
                  className="downloads__store__img lazyloaded"
                  src="https://cdn.cosmicjs.com/91ecd230-d604-11e8-b0eb-f914cb315e67-apple.svg"
                />
              </a>
            </div>
            <div className="downloads__store mr-4 mb-2">
              <a
                href="https://play.google.com/store/apps/details?id=com.main.gopuff"
                title="Download the googleplay App"
              >
                <img
                  data-src="https://cdn.cosmicjs.com/8dbcbd10-d604-11e8-b0eb-f914cb315e67-gp.svg"
                  alt="googleplay"
                  width={150}
                  height={46}
                  className="downloads__store__img lazyloaded"
                  src="https://cdn.cosmicjs.com/8dbcbd10-d604-11e8-b0eb-f914cb315e67-gp.svg"
                />
              </a>
            </div>
          </div>
        </div>

        <picture className="downloads__img absolute h-full w-full top-0 left-0 lazyloaded">
          <source
            media="(min-width: 540px)"
            data-srcset="https://cdn.cosmicjs.com/7e282390-8cae-11eb-a3a5-d7bcaab537a6-App-Banner2x.jpg"
            className="downloads__img absolute h-full w-full top-0 left-0 lazyloading"
            srcSet="https://cdn.cosmicjs.com/7e282390-8cae-11eb-a3a5-d7bcaab537a6-App-Banner2x.jpg"
          />{" "}
          <source
            media="(min-width: 320px)"
            data-srcset="https://cdn.cosmicjs.com/8152af90-8cae-11eb-a3a5-d7bcaab537a6-Mobile-App-Banner2x.jpg"
            className="downloads__img absolute h-full w-full top-0 left-0 lazyloading"
            srcSet="https://cdn.cosmicjs.com/8152af90-8cae-11eb-a3a5-d7bcaab537a6-Mobile-App-Banner2x.jpg"
          />{" "}
          <img
            data-src="https://cdn.cosmicjs.com/8152af90-8cae-11eb-a3a5-d7bcaab537a6-Mobile-App-Banner2x.jpg"
            alt="Download the Gopuff app"
            className="downloads__img absolute h-full w-full top-0 left-0 lazyloaded"
            src="https://cdn.cosmicjs.com/8152af90-8cae-11eb-a3a5-d7bcaab537a6-Mobile-App-Banner2x.jpg"
          />
        </picture>
      </Container>
    </>
  );
};

export default DownloadMartfuryApp;
