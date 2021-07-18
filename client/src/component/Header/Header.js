import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Login from "../Login/Login";
import "./Header.css";

import Logo1 from "../../img/logo1.png";
import Logo2 from "../../img/logo2.png";

// import "./style.css";
import flipkartLogo from "../../img/service_img/milk.gif";
import goldenStar from "../../img/service_img/milk.gif";
// import { IoIosArrowDown, IoIosCart, IoIosSearch } from "react-icons/io";
import {
  Modal,
  MaterialInput,
  MaterialButton,
  DropdownMenu,
} from "../MaterialUI";
import { useDispatch, useSelector } from "react-redux";
import {
  login,
  signout,
  getCartItems,
  signup as _signup,
} from "../../actions/auth.action";
// import Cart from "../UI/Cart";

const Header = () => {
  const [show, setShow] = useState(false);

  const [active, setActive] = useState(false);

  const handleShow = () => setShow(true);

  const [loginModal, setLoginModal] = useState(false);
  const [signup, setSignup] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // state cart value
  const cart = useSelector((state) => state.cart);

  const userSignup = () => {
    const user = { firstName, lastName, email, password };
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      return;
    }

    dispatch(_signup(user));
  };

  const userLogin = () => {
    if (signup) {
      userSignup();
    } else {
      dispatch(login({ email, password }));
    }
  };

  const logout = () => {
    dispatch(signout());
  };

  useEffect(() => {
    if (auth.authenticate) {
      setLoginModal(false);
    }
  }, [auth.authenticate]);

  // useEffect(() => {
  //   dispatch(getCartItems());
  // }, []);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const renderLoggedInMenu = () => {
    return (
      <>
        {/* <Nav.Link>
          <Button
            variant="outline"
            className="signin-button"
            size="lg"
            onClick={() => {
              setSignup(false);
              setLoginModal(true);
            }}
          >
            Order
          </Button>
        </Nav.Link> */}
        {/* </Link> */}

        <Nav.Link href="/cart p-1">
          <Button className="signup-button" size="lg">
            Order Now
          </Button>
        </Nav.Link>
      </>
    );
  };

  const renderNonLoggedInMenu = () => {
    return (
      <>
        <Nav.Link>
          <Button
            variant="outline"
            className="signin-button"
            size="lg"
            onClick={() => {
              setSignup(false);
              setLoginModal(true);
            }}
          >
            Sign In
          </Button>
        </Nav.Link>
        {/* </Link> */}

        <Nav.Link href="/cart p-1">
          <Button className="signup-button" size="lg">
            Sign Up
          </Button>
        </Nav.Link>
      </>
    );
  };

  return (
    <header>
      <Modal visible={loginModal} onClose={() => setLoginModal(false)}>
        <div className="authContainer">
          <div className="row ofModal">
            <div className="leftspace">
              <h2>Sign In</h2>
              <p>Get access to your Orders, Wishlist and Recommendations</p>
            </div>
            <div className="rightspace">
              <div className="loginInputContainer">
                {auth.error && (
                  <div style={{ color: "red", fontSize: 12 }}>{auth.error}</div>
                )}
                {signup && (
                  <MaterialInput
                    type="text"
                    label="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                )}
                {signup && (
                  <MaterialInput
                    type="text"
                    label="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                )}

                <MaterialInput
                  type="text"
                  label="Email/Mobile Number"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MaterialInput
                  type="password"
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  // rightElement={<a href="#">Forgot?</a>}
                />
                <MaterialButton
                  title={signup ? "Register" : "Login"}
                  bgColor="#fb641b"
                  textColor="#ffffff"
                  style={{
                    margin: "40px 0 20px 0",
                  }}
                  onClick={userLogin}
                />
                <p style={{ textAlign: "center" }}>OR</p>
                <MaterialButton
                  title="Request OTP"
                  bgColor="#ffffff"
                  textColor="#2874f0"
                  style={{
                    margin: "20px 0",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Navbar
        fixed="top"
        className={active ? "nav-main active" : "nav-main unactive"}
        expand="md"
      >
        <Container className={active ? "active nav-cont" : "unactive nav-cont"}>
          <Navbar.Brand style={{ color: "" }} href="#home">
            <img
              // className={active ? "nav-logo active" : "nav-logo unactive"}
              src={active ? Logo1 : Logo2}
              alt=""
            />
          </Navbar.Brand>

          <div className="rightMenu">
            {/* {auth.authenticate ? renderLoggedInMenu() : renderNonLoggedInMenu()} */}
          </div>

          <Nav>
            {/* <Link to="/userLogin"> */}

            {auth.authenticate ? renderLoggedInMenu() : renderNonLoggedInMenu()}
          </Nav>
        </Container>
      </Navbar>
      <Login show={show} setShow={setShow} />
    </header>
  );
};

export default Header;
