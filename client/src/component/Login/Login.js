import React, { useState } from "react"
import { Button, Col, Form, Row, Modal } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../../actions/userActions"
import { register } from "../../actions/userActions"
import { Link } from "react-router-dom"
import Message from "../Message/Message"

import { Typography } from "@material-ui/core"
// import loginIcon from "../../images/user.svg"
import "./Login.css"

const accountInitialValues = {
  login: {
    view: "LogIn",
    heading: "Log In Your Account",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "SignUp",
    heading: "Looks like you're new here",
    subHeading: "Signup to get started",
  },
}

// For signup state
const signupInitialValues = {
  fullName: "",
  email: "",
  age: "",
  password: "",
  confirmPassword: "",
}

const Login = ({ show, setShow }) => {
  const [account, toggleAccount] = useState(accountInitialValues.login)
  // Model State

  // Form State for SignUp
  const [signup, setSignup] = useState(signupInitialValues)

  // Form States For Login
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [passMatchMessage, setPassMatchMessage] = useState("")

  const dispatch = useDispatch()

  const handleClose = () => {
    setShow(false)
    toggleAccount(accountInitialValues.login)
  }

  // Sign Up states change
  const onInputChange = (e) => {
    if (e.target.name === "age") {
      const re = /^[0-9\b]+$/

      // if value is not blank, then test the regex
      if (e.target.value === "" || re.test(e.target.value)) {
        setSignup({ ...signup, [e.target.name]: parseInt(e.target.value) })
      }
    } else {
      setSignup({ ...signup, [e.target.name]: e.target.value })
    }
  }

  // state related to user login from redux store
  const userLogin = useSelector((state) => state.userLogin)
  // const { loading, error, userInfo } = userLogin

  // state related to user register from redux store
  const userRegister = useSelector((state) => state.userRegister)
  // const { regLoading, regError, regUserInfo } = userRegister

  //   To open SignUp Form
  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup)
  }

  //   To open Login Form
  const toggleLogin = () => {
    toggleAccount(accountInitialValues.login)
  }

  const LoginHandler = (e) => {
    //   prevent from reloading
    e.preventDefault()
    // DISPATCH LOGIN
    dispatch(login(email, password))
  }

  const registerHandler = (e) => {
    //   prevent from reloading
    e.preventDefault()
    // DISPATCH Register
    if (signup.password !== signup.confirmPassword) {
      setPassMatchMessage("Passwords do not match")
    } else {
      dispatch(register(signup))
    }
  }

  return (
    <>
      <Modal show={show} onHide={handleClose} className='login'>
        <Row className='m-0 p-4 log-reg-toggle'>
          <div className='toggle-signup mr-3' onClick={() => toggleLogin()}>
            {account.view === "LogIn" ? (
              <h4 style={{ color: "#FFFFFF" }}>Login</h4>
            ) : (
              <h4 style={{ color: "#999999" }}>Login</h4>
            )}
          </div>
          <div className='toggle-signup' onClick={() => toggleSignup()}>
            {account.view === "LogIn" ? (
              <h4 style={{ color: "#999999" }}>Register</h4>
            ) : (
              <h4 style={{ color: "#FFFFFF" }}>Register</h4>
            )}
          </div>
        </Row>

        <div className='modal-bg'>
          <Modal.Header closeButton>
            <Modal.Title>{account.heading}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {account.view === "LogIn" ? (
              // Form for Login
              <>
                <div>
                  {/* {error && <Message variant='danger'>{error}</Message>} */}
                </div>
                <Form onSubmit={LoginHandler}>
                  <Form.Group controlId='formBasicEmail'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type='email'
                      placeholder='Enter email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Form.Text className='text-muted'></Form.Text>
                  </Form.Group>

                  <Form.Group controlId='formBasicPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type='password'
                      placeholder='Password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>

                  <Button
                    variant='primary'
                    type='submit'
                    className='login-button'
                  >
                    Log In
                  </Button>

                  {/* Social Media */}
                  <div className='p-3 mt-3'>
                    <Row className='mb-3'>Or Log In With</Row>
                    <Row className='login-with-social'>
                      <Col>
                        <i
                          style={{
                            backgroundColor: "#185381",
                            color: "white",
                          }}
                          className='fab fa-facebook-f'
                        ></i>
                      </Col>
                      <Col>
                        <i
                          style={{
                            backgroundColor: "#00ccff",

                            color: "white",
                          }}
                          className='fab fa-twitter'
                        ></i>
                      </Col>
                      <Col>
                        <i
                          style={{
                            backgroundColor: "#cc0000",

                            color: "white",
                          }}
                          className='fab fa-google-plus-g'
                        ></i>
                      </Col>
                      <Col>
                        <i
                          style={{
                            backgroundColor: "green",

                            color: "white",
                          }}
                          className='fab fa-facebook-f'
                        ></i>
                      </Col>
                    </Row>
                  </div>
                </Form>
              </>
            ) : (
              <>
                {/* Form For Registration */}
                <div>
                  {passMatchMessage && (
                    <Message variant='danger'>{passMatchMessage}</Message>
                  )}
                  {/* {regError && <Message variant='danger'>{regError}</Message>} */}
                  {/* {regError && <Message variant='danger'>{regError}</Message>} */}
                </div>
                <Form onSubmit={registerHandler}>
                  <Form.Group controlId='fullName'>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type='fullname'
                      name='fullName'
                      placeholder='Enter Last Name'
                      value={signup.fullName}
                      onChange={(e) => onInputChange(e)}
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type='email'
                      name='email'
                      placeholder='Enter email'
                      value={signup.email}
                      onChange={(e) => onInputChange(e)}
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group controlId='age'>
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                      type='age'
                      name='age'
                      placeholder='Enter age'
                      value={signup.age}
                      onChange={(e) => onInputChange(e)}
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type='password'
                      name='password'
                      placeholder='Password'
                      value={signup.password}
                      onChange={(e) => onInputChange(e)}
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group controlId='confirmPassword'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type='password'
                      name='confirmPassword'
                      placeholder='Confirm password'
                      value={signup.confirmPassword}
                      onChange={(e) => onInputChange(e)}
                    ></Form.Control>
                  </Form.Group>

                  <Button
                    type='submit'
                    name='submit'
                    variant='primary'
                    className='login-button'
                  >
                    Register
                  </Button>

                  <Row className='py-3'>
                    <Col style={{ display: "flex" }}>
                      Have an account?
                      <div
                        className='ml-1'
                        style={{ color: "blue", cursor: "pointer" }}
                        onClick={() => toggleLogin()}
                      >
                        Login
                      </div>
                    </Col>
                  </Row>
                </Form>
              </>
            )}

            <Row className='py-3'></Row>
          </Modal.Body>
        </div>
        <Row style={{ justifyContent: "center" }}>
          <Modal.Footer className='back-to-home'>
            <h5 variant='secondary' onClick={handleClose}>
              Back To Home
            </h5>
          </Modal.Footer>
        </Row>
      </Modal>
    </>
  )
}

export default Login
