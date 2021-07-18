import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Services from "./Services/Services";
import ProductCard from "./ProductCard/ProductCard";
import DealOfTheDay from "./DealOfTheDay/DealOfTheDay";
import Top20BestSeller from "./Top20BestSeller/Top20BestSeller";
import TopCatOfMonth from "./TopCatOfMonth/TopCatOfMonth";
import ConsumerElectronics from "./ConsumerElectronics/ConsumerElectronics";
import HomeGardenKitchen from "./HomeGardenKitchen/HomeGardenKitchen";
import ClothingApparel from "./ClothingApparel/ClothingApparel";
import BestSellerBrand from "./BestSellerBrand/BestSellerBrand";
import DownloadMartfuryApp from "./DownloadMartfuryApp/DownloadMartfuryApp";
import QuoteList from "../QuoteList/QuoteList";
import CallToAction from "../../component/CallToAction/CallToAction";
import BrowseCatogary from "./BrowseCatogary/BrowseCatogary";
import CarouselItemStory from "./CarouselItemStory/CarouselItemStory";
// import BannerImage from "./BannerImage/BannerImage";

import "./HomePage.css";
const HomePage = () => {
  
  return (
    <>
      <Container>
        <Services />
      </Container>

      <CarouselItemStory
      // style={{ marginTop: "30px", marginBottom: "300px" }}
      />

      <BrowseCatogary />

      <Container fluid>
        <QuoteList />
      </Container>

      <Container>
        <CallToAction />
      </Container>

      <DownloadMartfuryApp />
    </>
  );
};

export default HomePage;
