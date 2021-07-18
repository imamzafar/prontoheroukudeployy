import React from "react"
// import { Link } from "react-router-dom"
import { Carousel, Figure } from "react-bootstrap"
import "./ProductCarousel.css"

const ProductCarousel = () => {
  return (
    <Carousel pause='hover' className='product-carousel '>
      <Carousel.Item>
        <h5 className='mb-5'>Top 20 Best Seller</h5>
        <Figure className='pruduct-carousel-figure'>
          <Figure.Image
            alt='171x180'
            src='/img/Products/CarouselProduct1.png'
          />
          <Figure.Caption>
            <h6>NewAir Beverage Cooler </h6>
            <h6> $389.50</h6>
          </Figure.Caption>
        </Figure>
        <Figure className='pruduct-carousel-figure'>
          <Figure.Image
            alt='171x180'
            src='/img/Products/CarouselProduct1.png'
          />
          <Figure.Caption>
            <h6>NewAir Beverage Cooler </h6>
            <h6> $389.50</h6>
          </Figure.Caption>
        </Figure>
        <Figure className='pruduct-carousel-figure'>
          <Figure.Image
            alt='171x180'
            src='/img/Products/CarouselProduct1.png'
          />
          <Figure.Caption>
            <h6>NewAir Beverage Cooler </h6>
            <h6> $389.50</h6>
          </Figure.Caption>
        </Figure>
        <Figure className='pruduct-carousel-figure'>
          <Figure.Image
            alt='171x180'
            src='/img/Products/CarouselProduct1.png'
          />
          <Figure.Caption>
            <h6>NewAir Beverage Cooler </h6>
            <h6> $389.50</h6>
          </Figure.Caption>
        </Figure>
      </Carousel.Item>

      <Carousel.Item>
        <h5 className='mb-5'>Top 20 Best Seller</h5>
        <Figure className='pruduct-carousel-figure'>
          <Figure.Image
            alt='171x180'
            src='/img/Products/CarouselProduct1.png'
          />
          <Figure.Caption>
            <h6>NewAir Beverage Cooler </h6>
            <h6> $389.50</h6>
          </Figure.Caption>
        </Figure>
        <Figure className='pruduct-carousel-figure'>
          <Figure.Image
            alt='171x180'
            src='/img/Products/CarouselProduct1.png'
          />
          <Figure.Caption>
            <h6>NewAir Beverage Cooler </h6>
            <h6> $389.50</h6>
          </Figure.Caption>
        </Figure>
        <Figure className='pruduct-carousel-figure'>
          <Figure.Image
            alt='171x180'
            src='/img/Products/CarouselProduct1.png'
          />
          <Figure.Caption>
            <h6>NewAir Beverage Cooler </h6>
            <h6> $389.50</h6>
          </Figure.Caption>
        </Figure>
        <Figure className='pruduct-carousel-figure'>
          <Figure.Image
            alt='171x180'
            src='/img/Products/CarouselProduct1.png'
          />
          <Figure.Caption>
            <h6>NewAir Beverage Cooler </h6>
            <h6> $389.50</h6>
          </Figure.Caption>
        </Figure>
      </Carousel.Item>
    </Carousel>
  )
}

export default ProductCarousel
