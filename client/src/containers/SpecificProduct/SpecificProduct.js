// this page is shown on
// localhost:5000/product/:productcategory
// different sliders will be shown
import React from "react";
import { useParams } from "react-router-dom";
import ProductCategorySlider from "../../component/ProductCategorySlider/ProductCategorySlider";
import { useEffect, useState } from "react";
import axios from "axios";

const SpecificProduct = () => {
  const [productcat, setproductcat] = useState([]);

  const { productcategory } = useParams();

  const getCategories = () => {
    console.log(productcategory, "productcategorys", "hi");
    axios
      .get(`http://localhost:5000/api/category/getcategory/${productcategory}`)
      .then((response) => {
        const procat = response.data.categoryList;

        setproductcat(procat);
        console.log(productcat);
      })
      .catch((err) => {
        console.error(`${err}`);
      });
  };

  useEffect(() => {
    getCategories();
  }, []);
  // this.loadPage();

  return (
    <>
      {console.log(productcat)}
      {productcat.map((el) => (
        <>
          <ProductCategorySlider
            productcatname={el.name}
            
            // need to make this dynamic

            productCatId={el._id}
          />
        </>
      ))}
    </>
  );
};

export default SpecificProduct;
