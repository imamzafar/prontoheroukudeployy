import React, { useState } from "react";
import { Spring, animated, interpolate } from "react-spring";
import { Container, Image } from "react-bootstrap";
import "./QuoteList.css";
import user1 from "../../img/user/user1.jpg";
import user2 from "../../img/user/user2.png";
import ScrollContainer from "react-indiana-drag-scroll";
import { InView } from "react-intersection-observer";

class QuoteList extends React.Component {
  state = {
    showH1: false,
  };

  onInViewChange = (inview) => {
    if (!this.state.showH1 && inview) this.setState({ showH1: true });
  };

  render() {
    return (
      <>
        <div className="quote-title">
          <h2>What People Are Saying </h2>
        </div>
        <ScrollContainer horizontal={true} className="scroll-container">
          <div className="quote-wrapper">
            <InView tag="div" onChange={this.onInViewChange}>
              {this.state.showH1 && (
                <Spring from={{ scale: 0.75 }} to={{ scale: 1 }} delay={200}>
                  {({ scale, ...rest }) => (
                    <>
                      <animated.div
                        style={{
                          ...rest,
                          transform: interpolate([scale], (s) => `scale(${s})`),
                          transformOrigin: "right",
                        }}
                        className="item green"
                      >
                        <Image src={user1} roundedCircle />{" "}
                        <div className="flex">
                          <div class="author">@mtissratalie</div>{" "}
                          <div class="content">
                            <p>
                              long distance relationships are superior because
                              when you're felling sick, your gf can surprise you
                              with a gopuff order of doritos, non-dairy ice
                              cream, and kombucha minutes before you fall asleep
                            </p>
                          </div>
                        </div>
                      </animated.div>
                    </>
                  )}
                </Spring>
              )}
            </InView>
            {/* item 0 */}
            <InView tag="div" onChange={this.onInViewChange}>
              {this.state.showH1 && (
                <Spring from={{ scale: 0.75 }} to={{ scale: 1 }} delay={200}>
                  {({ scale, ...rest }) => (
                    <>
                      <animated.div
                        style={{
                          ...rest,
                          transform: interpolate([scale], (s) => `scale(${s})`),
                          transformOrigin: "right",
                        }}
                        className="item yellow"
                      >
                        <Image src={user1} roundedCircle />{" "}
                        <div className="flex">
                          <div class="author">@mtissratalie</div>{" "}
                          <div class="content">
                            <p>
                              My daughter is isolating in her apartment an hour
                              away with her roommates. I haven't seen her in a
                              month. I just sent her the most ridiculous @gopuff
                              order. Moms gotta mom, and nothing says mom love
                              like a bunch of Oreos and the makings for PB&J.
                            </p>
                          </div>
                        </div>
                      </animated.div>
                    </>
                  )}
                </Spring>
              )}
            </InView>
            <InView tag="div" onChange={this.onInViewChange}>
              {this.state.showH1 && (
                <Spring from={{ scale: 0.75 }} to={{ scale: 1 }} delay={400}>
                  {({ scale, ...rest }) => (
                    <>
                      <animated.div
                        style={{
                          ...rest,
                          transform: interpolate([scale], (s) => `scale(${s})`),
                          transformOrigin: "right",
                        }}
                        className="item blue"
                      >
                        <Image src={user1} roundedCircle />{" "}
                        <div className="flex">
                          <div class="author">@melissapears</div>{" "}
                          <div class="content">
                            <p>
                              Voluptua stet voluptua lorem et justo sit takimata
                              at rebum, et sed labore at sanctus sit amet
                              invidunt ipsum. Sea sadipscing dolor.
                            </p>
                          </div>
                        </div>
                      </animated.div>
                    </>
                  )}
                </Spring>
              )}
            </InView>
            <InView tag="div" onChange={this.onInViewChange}>
              {this.state.showH1 && (
                <Spring from={{ scale: 0.75 }} to={{ scale: 1 }} delay={200}>
                  {({ scale, ...rest }) => (
                    <>
                      <animated.div
                        style={{
                          ...rest,
                          transform: interpolate([scale], (s) => `scale(${s})`),
                          transformOrigin: "right",
                        }}
                        className="item purple"
                      >
                        <Image src={user2} roundedCircle />{" "}
                        <div className="flex">
                          <div class="author" style={{ color: "white" }}>
                            @robinschelak
                          </div>{" "}
                          <div class="content">
                            <p style={{ color: "white" }}>
                              Labore eirmod gubergren dolor kasd sea dolor ea at
                              no magna. Amet at dolor aliquyam sit invidunt
                              rebum ipsum, labore aliquyam sed labore amet sit
                              tempor et, dolore sed ipsum sed sed eirmod. Sed.
                            </p>
                          </div>
                        </div>
                      </animated.div>
                    </>
                  )}
                </Spring>
              )}
            </InView>
            <InView tag="div" onChange={this.onInViewChange}>
              {this.state.showH1 && (
                <Spring from={{ scale: 0.75 }} to={{ scale: 1 }} delay={200}>
                  {({ scale, ...rest }) => (
                    <>
                      <animated.div
                        style={{
                          ...rest,
                          transform: interpolate([scale], (s) => `scale(${s})`),
                          transformOrigin: "right",
                        }}
                        className="item light-red"
                      >
                        <Image src={user1} roundedCircle />{" "}
                        <div className="flex">
                          <div class="author">@mtissratalie</div>{" "}
                          <div class="content">
                            <p>
                              long distance relationships are superior because
                              when you're felling sick, your gf can surprise you
                              with a gopuff order of doritos, non-dairy ice
                              cream, and kombucha minutes before you fall asleep
                            </p>
                          </div>
                        </div>
                      </animated.div>
                    </>
                  )}
                </Spring>
              )}
            </InView>
            <InView tag="div" onChange={this.onInViewChange}>
              {this.state.showH1 && (
                <Spring from={{ scale: 0.75 }} to={{ scale: 1 }} delay={160}>
                  {({ scale, ...rest }) => (
                    <>
                      <animated.div
                        style={{
                          ...rest,
                          transform: interpolate([scale], (s) => `scale(${s})`),
                          transformOrigin: "right",
                        }}
                        className="item blue"
                      >
                        <Image src={user2} roundedCircle />{" "}
                        <div className="flex">
                          <div class="author">@mtissratalie</div>{" "}
                          <div class="content">
                            <p>
                              long distance relationships are superior because
                              when you're felling sick, your gf can surprise you
                              with a gopuff order of doritos, non-dairy ice
                              cream, and kombucha minutes before you fall asleep
                            </p>
                          </div>
                        </div>
                      </animated.div>
                    </>
                  )}
                </Spring>
              )}
            </InView>
            <InView tag="div" onChange={this.onInViewChange}>
              {this.state.showH1 && (
                <Spring from={{ scale: 0.75 }} to={{ scale: 1 }} delay={230}>
                  {({ scale, ...rest }) => (
                    <>
                      <animated.div
                        style={{
                          ...rest,
                          transform: interpolate([scale], (s) => `scale(${s})`),
                          transformOrigin: "right",
                        }}
                        className="item blue"
                      >
                        <Image src={user1} roundedCircle />{" "}
                        <div className="flex">
                          <div class="author">@mtissratalie</div>{" "}
                          <div class="content">
                            <p>
                              long distance relationships are superior because
                              when you're felling sick, your gf can surprise you
                              with a gopuff order of doritos, non-dairy ice
                              cream, and kombucha minutes before you fall asleep
                            </p>
                          </div>
                        </div>
                      </animated.div>
                    </>
                  )}
                </Spring>
              )}
            </InView>
            <InView tag="div" onChange={this.onInViewChange}>
              {this.state.showH1 && (
                <Spring from={{ scale: 0.75 }} to={{ scale: 1 }} delay={430}>
                  {({ scale, ...rest }) => (
                    <>
                      <animated.div
                        style={{
                          ...rest,
                          transform: interpolate([scale], (s) => `scale(${s})`),
                          transformOrigin: "right",
                        }}
                        className="item light-red"
                      >
                        <Image src={user1} roundedCircle />{" "}
                        <div className="flex">
                          <div class="author">@mtissratalie</div>{" "}
                          <div class="content">
                            <p>
                              long distance relationships are superior because
                              when you're felling sick, your gf can surprise you
                              with a gopuff order of doritos, non-dairy ice
                              cream, and kombucha minutes before you fall asleep
                            </p>
                          </div>
                        </div>
                      </animated.div>
                    </>
                  )}
                </Spring>
              )}
            </InView>
            <InView tag="div" onChange={this.onInViewChange}>
              {this.state.showH1 && (
                <Spring from={{ scale: 0.75 }} to={{ scale: 1 }} delay={230}>
                  {({ scale, ...rest }) => (
                    <>
                      <animated.div
                        style={{
                          ...rest,
                          transform: interpolate([scale], (s) => `scale(${s})`),
                          transformOrigin: "right",
                        }}
                        className="item blue"
                      >
                        <Image src={user2} roundedCircle />{" "}
                        <div className="flex">
                          <div class="author">@mtissratalie</div>{" "}
                          <div class="content">
                            <p>
                              long distance relationships are superior because
                              when you're felling sick, your gf can surprise you
                              with a gopuff order of doritos, non-dairy ice
                              cream, and kombucha minutes before you fall asleep
                            </p>
                          </div>
                        </div>
                      </animated.div>
                    </>
                  )}
                </Spring>
              )}
            </InView>
            <InView tag="div" onChange={this.onInViewChange}>
              {this.state.showH1 && (
                <Spring from={{ scale: 0.75 }} to={{ scale: 1 }} delay={150}>
                  {({ scale, ...rest }) => (
                    <>
                      <animated.div
                        style={{
                          ...rest,
                          transform: interpolate([scale], (s) => `scale(${s})`),
                          transformOrigin: "right",
                        }}
                        className="item blue"
                      >
                        <Image src={user1} roundedCircle />{" "}
                        <div className="flex">
                          <div class="author">@mtissratalie</div>{" "}
                          <div class="content">
                            <p>
                              long distance relationships are superior because
                              when you're felling sick, your gf can surprise you
                              with a gopuff order of doritos, non-dairy ice
                              cream, and kombucha minutes before you fall asleep
                            </p>
                          </div>
                        </div>
                      </animated.div>
                    </>
                  )}
                </Spring>
              )}
            </InView>
          </div>
        </ScrollContainer>
      </>
    );
  }
}

export default QuoteList;
