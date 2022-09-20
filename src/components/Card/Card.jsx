import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const Card = (props) => {
  const dateVal = new Date(props.date);
  const strMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec'];
  const year = dateVal.getFullYear();
  const date = dateVal.getDate();
  const month = strMonth[dateVal.getMonth()];
  const title = props.title;
  const price = props.price;


  return (
      <div className="row mb-3">
        <div className="card bg-light">
          <div className="row g-0">
            <div className="col-2">
                <h2 className="fs-4">{year}</h2>
                <h2 className="fs-6">{date}</h2>
                <h2 className="fs-6">{month}</h2>
            </div>
            <div className="col-6 align-self-center">
              <h4 className="fs-4 ms-auto">{title}</h4>
            </div>
            <div className="col-4 align-self-center">
              <h4 className="fs-4 ms-auto">
                Rp.{price}
              </h4>
            </div>
          </div>
        </div>
      </div>
  );
};

import "bootstrap/dist/js/bootstrap.js";

export default Card;
