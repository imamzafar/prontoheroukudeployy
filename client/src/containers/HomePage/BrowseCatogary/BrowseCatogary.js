import React from "react";
import { Link } from "react-router-dom";
import "./BrowseCatogary.css";

var s = Array(12).fill("s");
console.log(s, "hi im s");
const BrowseCatogary = () => {
  return (
    <>
      <div class="categories__title__wrapper in-viewport" data-in-viewport="i5">
        <h2 class="mt-2 categories__title">Browse a Popular Category</h2>{" "}
        <Link to="/shop">
          <a class="puff-cta categories__title__link">Start Shopping</a>
        </Link>
      </div>
      <ul class="categories__list">
        {s.map((el) => (
          <li class="categories__list__item">
            <a
              href="https://gopuff.com/snacks"
              class="categories__list__item__link"
            >
              <div class="categories__list__item__img">
                <svg
                  viewBox="0 0 48.9028 49.0208"
                  height="49.0208"
                  width="48.9028"
                  data-name="Layer 1"
                  id="b24a2f86-2e7f-4e31-aaaa-b6b38b2fd669"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline
                    xmlns="http://www.w3.org/2000/svg"
                    points="15.132 33.847 15.771 32.247 15.771 11.747 12.641 5.885 12.641 1.096"
                    fill="none"
                    stroke="#140b63"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></polyline>
                  <polyline
                    xmlns="http://www.w3.org/2000/svg"
                    points="47.771 1.096 47.771 5.885 44.641 11.747 44.641 32.247 47.903 39.207 47.903 44.307"
                    fill="none"
                    stroke="#140b63"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></polyline>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M12.6405,1c.975,0,.975,1,1.95,1s.974-1,1.9481-1,.9747,1,1.95,1,.9758-1,1.9517-1,.9747,1,1.95,1,.9759-1,1.9518-1,.9753,1,1.9507,1,.9763-1,1.9526-1,.9756,1,1.9513,1,.9762-1,1.9524-1S33.1241,2,34.1,2c.9746,0,.9746-1,1.9491-1s.9759,1,1.9518,1,.9769-1,1.9539-1,.9771,1,1.9542,1,.9773-1,1.9547-1c.9789,0,.9789,1,1.9578,1s.979-1,1.9579-1"
                    fill="none"
                    stroke="#140b63"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                  <line
                    xmlns="http://www.w3.org/2000/svg"
                    x1="47.7706"
                    y1="5.8849"
                    x2="12.6405"
                    y2="5.8849"
                    fill="none"
                    stroke="#140b63"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></line>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M43.9871,44.5476c.9789,0,.9789,1,1.9579,1s.9789-1,1.9578-1"
                    fill="none"
                    stroke="#140b63"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                  <line
                    xmlns="http://www.w3.org/2000/svg"
                    x1="47.9028"
                    y1="39.2073"
                    x2="43.9871"
                    y2="39.2073"
                    fill="none"
                    stroke="#140b63"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></line>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M19.9472,31.3032V21.64a6.2288,6.2288,0,0,1,5.15-6.0045,43.11,43.11,0,0,1,5.5075-.1476q3.1647-.001,6.3293.0072a1.5822,1.5822,0,0,0,.9857-.2423q1.3154-.6956,2.6332-1.3863"
                    fill="none"
                    stroke="#140b63"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M40.5529,13.8665V23.53a6.2286,6.2286,0,0,1-5.15,6.0044,43.111,43.111,0,0,1-5.5075.1477q-3.1647.0011-6.3293-.0073a1.5827,1.5827,0,0,0-.9857.2424q-1.3155.6955-2.6332,1.3862"
                    fill="none"
                    stroke="#140b63"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M40.705,48.2192"
                    fill="none"
                    stroke="#140b63"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                  <line
                    xmlns="http://www.w3.org/2000/svg"
                    x1="5.5238"
                    y1="35.1803"
                    x2="5.5238"
                    y2="47.6895"
                    fill="none"
                    stroke="#140b63"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></line>
                  <line
                    xmlns="http://www.w3.org/2000/svg"
                    x1="36.1155"
                    y1="35.428"
                    x2="36.1155"
                    y2="47.6895"
                    fill="none"
                    stroke="#140b63"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></line>
                  <rect
                    xmlns="http://www.w3.org/2000/svg"
                    x="11.2543"
                    y="40.0822"
                    width="19.164"
                    height="3.087"
                    stroke-width="2"
                    stroke="#140b63"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                  ></rect>
                  <polyline
                    xmlns="http://www.w3.org/2000/svg"
                    points="1.4 35.233 5.454 35.233 8.703 36.76 32.73 36.76 35.992 35.303 40.199 35.303"
                    fill="none"
                    stroke="#140b63"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></polyline>
                  <polyline
                    xmlns="http://www.w3.org/2000/svg"
                    points="40.195 48.019 36.14 48.019 32.892 46.491 8.865 46.491 5.603 47.948 1.404 47.948 1.4 47.948"
                    fill="none"
                    stroke="#140b63"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></polyline>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M41.1948,41.6667"
                    fill="none"
                    stroke="#140b63"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M40.1948,35.3032"
                    fill="none"
                    stroke="#140b63"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M40.65,35.3208c0,1.0582-1,1.0582-1,2.1164s1,1.0573,1,2.1146-1,1.058-1,2.116,1,1.0592,1,2.1184-1,1.058-1,2.1161,1,1.0592,1,2.1185"
                    fill="none"
                    stroke="#140b63"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M1,35.25c0,1.0582,1,1.0582,1,2.1164S1,38.4237,1,39.481s1,1.058,1,2.116-1,1.0592-1,2.1184,1,1.058,1,2.1161S1,46.8907,1,47.95"
                    fill="none"
                    stroke="#140b63"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                </svg>
              </div>{" "}
              <Link to="/products/snacks">
                <h3 class="categories__list__item__title">Snacks</h3>
              </Link>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BrowseCatogary;
