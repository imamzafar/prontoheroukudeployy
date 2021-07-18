import React, { useState } from "react";
import ModalCart from "../../containers/Cart/Cart";
import {
  Navbar,
  Form,
  FormControl,
  Container,
  Row,
  Button,
} from "react-bootstrap";
import { Modal } from "../MaterialUI";
import Login from "../Login/Login";
import "./Navbar2.css";
import Cart from "../UI/Cart";
import { useSelector } from "react-redux";

import Logo2 from "../../img/logo2.png";

const Navbar2 = () => {
  // state cart value
  const [cartModal, setCartModal] = useState(false);

  const cart = useSelector((state) => state.cart);

  return (
    <>
    <header>
      <Navbar
        className="navbar2"
        bg="light"
        expand="xxl"
        style={{ position: "relative" }}
      >
        <div style={{ marginLeft: "65px" }}>
          <Navbar.Brand href="/">
            <img src={Logo2} alt="" />
          </Navbar.Brand>
        </div>

        <Form
          inline
          style={{
            position: "relative",
            width: "50%",
            alignSelf: "flex-end",
            marginRight: "17%",
          }}
        >
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            style={{
              width: "100%",
              textAlign: "center",
              borderRadius: "20px",
            }}
          />
          <Button variant="" style={{ border: "none", filter: "none" }}>
            <i
              style={{
                color: "var(--light-blue)",
                // border: "2px solid black",
                // textAlign: "center",
                position: "absolute",
                right: "20px",
                top: "10px",
                border: "none",
                zIndex: "4",
              }}
              class="fas fa-search"
            ></i>
          </Button>
        </Form>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ postion: "absolute" }}
        />
        {/* <Navbar id="basic-navbar-nav" className="justify-content-end">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar> */}

        {/* cart */}
        <div className = 'carticonn'
          onClick={() => {
            setCartModal(true);
          }}
          style={{ display: "flex", color: "white" }}
        >
          {/* <a href={`/cart`} className="cart"> */}
          
          <Cart count={Object.keys(cart.cartItems).length} />
          <span
            style={{ margin: "0 15px", fontWeight: "400", fontSize: "22px" }}
          >
            Cart
          </span>
          {/* </a> */}
        </div>
      </Navbar>
      <Login />
      <Container
        style={{
          backgroundColor: "var(--background-gray",
          marginTop: "2px",
          marginBottom: "2px",
        }}
        fluid
      >
        <Row style={{ justifyContent: "center", alignItems: "center" }}>
          <h6
            style={{ textAlign: "center", marginBottom: "0", padding: "2px" }}
          >
            Deliver to your city
          </h6>
        </Row>
      </Container>
      <Container
        style={{
          visibility: "hidden",
          backgroundColor: "#EF5350",
          marginTop: "2px",
          marginBottom: "2px",
        }}
        fluid
      >
        <Row style={{ justifyContent: "center", alignItems: "center" }}>
          <h6
            style={{ textAlign: "center", marginBottom: "0", padding: "5px" }}
          >
            Deliver to your city
          </h6>
        </Row>
      </Container>

    </header>
    <div className = 'cartModall'>

      
      <Modal visible={cartModal} onClose={() => setCartModal(false)}>
        <ModalCart onClose={() => setCartModal(false)}/>
      </Modal>
    </div>
    </>
  );
};

export default Navbar2;
