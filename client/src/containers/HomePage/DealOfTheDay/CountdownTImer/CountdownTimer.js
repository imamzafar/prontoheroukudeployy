import React from "react"
import Countdown from "react-countdown"
import { Row } from "react-bootstrap"
import "./CountdownTimer.css"

// Random component
const Completionist = () => <span>Offer Expired</span>

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />
  } else {
    // Render a countdown
    return (
      <Row className='align-items-center ml-0 mr-0'>
        {/* days */}
        <Row className='m-0 align-items-center countdown'>
          <div className='row flex-column align-items-center ml-0 mr-0'>
            <div className='p-3 border border-dark rounded '>
              {days.toString().length === 1 ? `0${days}` : days}
            </div>
            <div>
              <small>DAYS</small>
            </div>
          </div>
          <h3>:</h3>
        </Row>

        {/* days end */}

        {/* hours */}
        <Row className='m-0 align-items-center countdown'>
          <div className='row flex-column align-items-center ml-0 mr-0'>
            <div className='p-3 border border-dark rounded '>
              {hours.toString().length === 1 ? `0${hours}` : hours}
            </div>
            <div>
              <small>HOURS</small>{" "}
            </div>
          </div>
          <h3>:</h3>
        </Row>

        {/* hours end */}

        {/* minutes */}
        <Row className='m-0 align-items-center countdown'>
          <div className='row flex-column align-items-center ml-0 mr-0'>
            <div className='p-3 border border-dark rounded '>
              {minutes.toString().length === 1 ? `0${minutes}` : minutes}
            </div>
            <div>
              <small>MINUTES</small>{" "}
            </div>
          </div>
          <h3>:</h3>
        </Row>

        {/* minutes end */}
        {/* seconds */}
        <Row className='m-0 align-items-center countdown'>
          <div className='row flex-column align-items-center ml-0 mr-0'>
            <div className='p-3 border border-dark rounded '>
              {seconds.toString().length === 1 ? `0${seconds}` : seconds}
            </div>
            <div>
              <small>SECONDS </small>
            </div>
          </div>
        </Row>

        {/* seconds end */}
      </Row>
    )
  }
}

const CountdownTimer = () => {
  return (
    <>
      <h6>
        <span>Expires In </span>
      </h6>
      <Countdown date={Date.now() + 240000000} renderer={renderer}></Countdown>
    </>
  )
}

export default CountdownTimer
