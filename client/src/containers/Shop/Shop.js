import React from "react";
import { Card, Row } from "react-bootstrap";
import "./Shop.css";
import ProductCard from "../../component/ProductCard/ProductCard";
import { Link } from "react-router-dom";

const product_category = [
  {
    _id: "10eba340-nfjc-11eb-b8bc-0242ac130003",
    title: "Snacks",
    details: "Operations and surgical procedures",
    image:
      "https://60mm.imgeng.in/w_500/https://d2aam04nmhpdf8.cloudfront.net/icons/categories/000/000/020/original/1617297932.png?1617297932",
  },
  {
    _id: "36eb5176-bdhc-11eb-b8bc-0242ac130003",
    title: "Alcohol",
    details: "Bones, joints and muscles",
    image:
      "https://60mm.imgeng.in/w_500/https://d2aam04nmhpdf8.cloudfront.net/icons/categories/000/000/058/original/1622744154.png?1622744154",
  },
  {
    _id: "3f9e633a-d01c-3bgd-b8bc-0242ac130003",
    title: "Drink",
    details: "Brain and nerves",
    image:
      "https://60mm.imgeng.in/w_900/https://d2aam04nmhpdf8.cloudfront.net/icons/categories/000/000/214/original/1616602349.png?1616602349",
  },
  {
    _id: "3f9e633a-d01c-11eb-b8bc-0242anh3v003",
    title: "Ice Cream",
    details: "Brain and nerves",
    image:
      "https://60mm.imgeng.in/w_500/https://d2aam04nmhpdf8.cloudfront.net/icons/categories/000/000/215/original/1601303166.jpg?1601303166",
  },
  {
    _id: "3f9e633a-d01c-11j3-b8bc-0242ac130003",
    title: "Shop Deal",
    details: "Brain and nerves",
    image:
      "https://60mm.imgeng.in/w_500/https://d2aam04nmhpdf8.cloudfront.net/icons/categories/000/000/098/original/1606755130.jpg?1606755130",
  },
  {
    _id: "3f9e633a-d01c-11eb-b8bc-0242ac133923",
    title: "Grocery",
    details: "Brain and nerves",
    image:
      "https://60mm.imgeng.in/w_500/https://d2aam04nmhpdf8.cloudfront.net/icons/categories/000/000/208/original/1604967425.jpg?1604967425",
  },
  {
    _id: "36eb5176-d01c-11eb-b8bc-0242ac174003",
    title: "Better For You",
    details: "Bones, joints and muscles",
    image:
      "https://60mm.imgeng.in/w_500/https://d2aam04nmhpdf8.cloudfront.net/icons/categories/000/000/216/original/1603723424.jpg?1603723424",
  },
  {
    _id: "Bath & Beauty",
    title: "Ea commodo consequat",
    details: "Bones, joints and muscles",
    image:
      "https://60mm.imgeng.in/w_500/https://d2aam04nmhpdf8.cloudfront.net/icons/categories/000/000/216/original/1603723424.jpg?1603723424",
  },
  {
    _id: "3f9hfb3a-d01c-11eb-b8bc-0242ac130003",
    title: "Quick Meals",
    details: "Brain and nerves",
    image:
      "https://60mm.imgeng.in/w_500/https://d2aam04nmhpdf8.cloudfront.net/icons/categories/000/000/209/original/1604967466.jpg?1604967466",
  },
  {
    _id: "3f9e633a-d01c-1vfd-b8bc-0242ac130003",
    title: "Breads",
    details: "Brain and nerves",
    image:
      "https://60mm.imgeng.in/w_500/https://d2aam04nmhpdf8.cloudfront.net/icons/categories/000/000/216/original/1603723424.jpg?1603723424",
  },
  {
    _id: "3f9e633a-d01c-11eb-b8bc-0234dc130003",
    title: "Health",
    details: "Brain and nerves",
    image:
      "https://60mm.imgeng.in/w_500/https://d2aam04nmhpdf8.cloudfront.net/icons/categories/000/000/211/original/1586791667.jpg?1586791667",
  },
  {
    _id: "36eb5176-d01c-11eb-bdf-0242ac130003",
    title: "Quick Meals",
    details: "Bones, joints and muscles",
    image:
      "https://60mm.imgeng.in/w_500/https://d2aam04nmhpdf8.cloudfront.net/icons/categories/000/000/216/original/1603723424.jpg?1603723424",
  },
  {
    _id: "36eb5176-d01c-11eb-b8bc-0242fr130003",
    title: "Home & Office",
    details: "Bones, joints and muscles",
    image:
      "https://60mm.imgeng.in/w_500/https://d2aam04nmhpdf8.cloudfront.net/icons/categories/000/000/212/original/1607011932.png?1607011932",
  },
  {
    _id: "36eb5176-d01c-11eb-b8bc-0242ac130024",
    title: "Baby",
    details: "Bones, joints and muscles",
    image:
      "https://60mm.imgeng.in/w_500/https://d2aam04nmhpdf8.cloudfront.net/icons/categories/000/000/161/original/1595864001.jpg?1595864001",
  },
  {
    _id: "36eb5176-d01c-11eb-b8bc-0242ac130024",
    title: "Pets",
    details: "Bones, joints and muscles",
    image:
      "https://60mm.imgeng.in/w_500/https://d2aam04nmhpdf8.cloudfront.net/icons/categories/000/000/220/original/1595864081.jpg?1595864081",
  },
  {
    _id: "36eb5176-d01c-11eb-b8bc-0242ac130024",
    title: "Cleaning",
    details: "Bones, joints and muscles",
    image:
      "https://60mm.imgeng.in/w_900/https://d2aam04nmhpdf8.cloudfront.net/icons/categories/000/000/207/original/1607011985.png?1607011985",
  },
  {
    _id: "36eb5176-d01c-11eb-b8bc-0242ac130024",
    title: "",
    details: "Bones, joints and muscles",
    image:
      "https://60mm.imgeng.in/w_900/https://publicassets.gopuff.com/mixcart/puff-points/banner_square.jpg",
  },
  {
    _id: "36eb5176-d01c-11eb-b8bc-0242ac130024",
    title: "",
    details: "Bones, joints and muscles",
    image:
      "https://60mm.imgeng.in/w_900/https://publicassets.gopuff.com/mixcart/banners/2021_fam_header_icon.png",
  },
];

const Shop = () => {
  return (
    <>
      <Row className="shopRow">
        <Card className="topProductCard" style={{ width: "600px" }}>
          <Card.Img
            variant="top"
            src="https://publicassets.gopuff.com/mixcart/banners/FlaminHot-HomepageBannerLTOs.jpg"
          />
        </Card>
      </Row>
      <Row className="shopRow">
        {/* <ProductCard
          zoom="no-zoom"
          // cardText="Snacks"
          src="https://60mm.imgeng.in/w_900/https://publicassets.gopuff.com/mixcart/tiles/referral/referral_no-dollar_ice-cream-hearts-v2_square_1020x1020.png"
        /> */}

        {product_category.slice(0, 4).map((el) => (
          <Link to={`/products/${el.title}`}>
            <ProductCard cardText={el.title} src={el.image} />
          </Link>
        ))}
      </Row>
      {/* small */}
      <Row className="shopRow">
        <ProductCard
          zoom="no-zoom"
          width="12rem"
          // cardText="Snacks"
          src="https://60mm.imgeng.in/w_300/https://publicassets.gopuff.com/mixcart/tiles/moments/gobox.png"
        />
        <ProductCard
          zoom="no-zoom"
          width="12rem"
          // cardText="Snacks"
          src="https://60mm.imgeng.in/w_500/https://d2aam04nmhpdf8.cloudfront.net/icons/categories/000/000/020/original/1617297932.png?1617297932"
        />{" "}
        <ProductCard
          zoom="no-zoom"
          width="12rem"
          // cardText="Snacks"
          src="https://60mm.imgeng.in/w_500/https://d2aam04nmhpdf8.cloudfront.net/icons/categories/000/000/020/original/1617297932.png?1617297932"
        />{" "}
        <ProductCard
          zoom="no-zoom"
          width="12rem"
          // cardText="Snacks"
          src="https://60mm.imgeng.in/w_300/https://publicassets.gopuff.com/mixcart/tiles/moments/SafeAtHome_NewTile_Option2.jpg"
        />
      </Row>
      <Row className="shopRow">
        {product_category.slice(3, 7).map((el) => (
          <Link to={`/products/${el.title}`}>
            <ProductCard cardText={el.title} src={el.image} />
          </Link>
        ))}
      </Row>
      <Row className="shopRow">
        {product_category.slice(7, 11).map((el) => (
          <Link to={`/products/${el.title}`}>
            <ProductCard cardText={el.title} src={el.image} />
          </Link>
        ))}
      </Row>
      <Row className="shopRow">
        {product_category.slice(11, 15).map((el) => (
          <Link to={`/products/${el.title}`}>
            <ProductCard cardText={el.title} src={el.image} />
          </Link>
        ))}
      </Row>

      <Row className="shopRow">
        {product_category.slice(-1).map((el) => (
          <Link to={`/products/${el.title}`}>
            <ProductCard cardText={el.title} src={el.image} />
          </Link>
        ))}
      </Row>
      {/*  */}
    </>
  );
};

export default Shop;
