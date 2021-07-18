import React, {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import HomePage from "./containers/HomePage/HomePage.js";
import BannerImage from "./component/BannerImage/BannerImage";
import Shop from "./containers/Shop/Shop";
import SpecificProduct from "./containers/SpecificProduct/SpecificProduct";
import UserLogin from "./component/Login/UserLogin";
import Navbar2 from "./component/Navbar2/Navbar2";
import Cart from './containers/Cart/Cart'
import {  updateCart } from "./actions/cart.action";


import { isUserLoggedIn } from './actions/auth.action';
import { getInitialData} from './actions/initialData.action'

const App = () => {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)


  // componentDidMount or componentDidUpdate
    useEffect(() => {
      if (!auth.authenticate) {
        dispatch(isUserLoggedIn());
      }

    }, [auth.authenticate]);

  useEffect(() => {
    console.log("App.js - updateCart");
    dispatch(updateCart());
  }, [auth.authenticate]);



  return (
    <Router>
      {/* <Header /> */}
      {/* <BannerImage /> */}
      <Route path="/" component={Header} exact />
      {/* <BannerImage /> */}
      <Route path="/" component={BannerImage} exact />

      <Route path="/shop" component={Navbar2} exact />
      <Route path="/products/:productcategory" component={Navbar2} />
      <main className=" py-3">
        {/* <Route path="/" component={HomePage} /> */}
        <Container></Container>
        <Route path="/" component={HomePage} exact />
        <Route path="/userLogin" component={UserLogin} exact />
        <Route path="/shop" component={Shop} exact />
        <Route
          path="/products/:productcategory"
          component={SpecificProduct}
          exact
        />
           <Route path="/cart" component={Cart} exact />
      </main>

      <Footer />
      
    </Router>
  );
};

export default App;
