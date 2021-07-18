import React from "react"
import "./ProductGallery.css"
import DetailsThumb from "./ProductGalleryComponents/DetailsThumb"

class ProductGallery extends React.Component {
  state = {
    products: [
      {
        _id: "1",
        title: "Nike Shoes",
        src: [
          "https://images-na.ssl-images-amazon.com/images/I/91B3XqMRdTS._AC_SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/8107FcW675S._AC_SX425_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/81942uMZGeS._AC_SX425_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/815hKsMrC0L._AC_SX425_.jpg",
        ],
        description: "UI/UX designing, html css tutorials",
        content:
          "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        price: 23,
        colors: ["red", "black", "crimson", "teal"],
        count: 1,
      },
    ],
    index: 0,
  }

  myRef = React.createRef()

  handleTab = (index) => {
    this.setState({ index: index })
    const images = this.myRef.current.children
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "")
    }
    images[index].className = "active"
  }

  componentDidMount() {
    const { index } = this.state
    this.myRef.current.children[index].className = "active"
  }

  render() {
    const { products, index } = this.state
    return (
      <>
        {products.map((item) => (
          <div className='details' key={item._id}>
            <div className='box'>
              <DetailsThumb
                images={item.src}
                tab={this.handleTab}
                myRef={this.myRef}
              />
            </div>
            <div className='big-img'>
              <img src={item.src[index]} alt='' />
            </div>
          </div>
        ))}
      </>
    )
  }
}

export default ProductGallery
