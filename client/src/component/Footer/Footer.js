import React from "react"
import { Button } from "react-bootstrap"
import "./Footer.css"

const Footer = () => {
  return (
    <footer className='main-footer'>
      <div className='container justify-content-center px-0 '>
        <div className='row justify-content-around mb-0 pt-5 mx-4'>
          <div className='col-xl-2 col-md-3 pt-4 order-1'>
            <ul className='footer-ul list-unstyled'>
              <li className='mt-md-0 mt-4'>QUICK LINK</li>

              <li>Support Center </li>
              <li>Policy</li>
              <li>Term & Conditions</li>
              <li>Return</li>
              <li>Register</li>
              <li>A Seller</li>
              <li>FAQS</li>
            </ul>
          </div>
          <div className='col-xl-2 col-md-3 pt-4 order-2'>
            <ul className='footer-ul list-unstyled'>
              <li className='mt-md-0 mt-4'>COMPANY</li>
              <li>About Us</li>
              <li>Team Member</li>
              <li>Carrer</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className='col-xl-auto col-md-3 pt-4 my-sm-0 order-md-3 order-sm-1 '>
            <ul className='footer-ul list-unstyled'>
              <li className='mt-md-0 mt-4'>PRONTO BUSINESS</li>
              <li>Sell on Pronto</li>
              <li>Advertises on Pronto</li>
            </ul>
          </div>
          <div className=' col-xl-auto col-md-6 col-12 pt-4 my-sm-0 order-6 '>
            <label htmlFor='email' className='email mb-3'>
              <b>NEWSLETTER</b>
            </label>
            <div className='newsletter form-group'>
              <input
                type='email'
                className='form-control form-control-lg'
                placeholder='Enter Tour Email'
                id='email'
              />
              <Button className='prod-btn '>Subscribe</Button>
            </div>{" "}
          </div>
        </div>
        <div className='cr row justify-content-evenly px-3 py-3 pt-5'>
          <p className=''>
            <small>© 2017 Pronto. All Rights Reserved</small>
          </p>
          <p>
            <small>We Using Safe Payment For</small>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
