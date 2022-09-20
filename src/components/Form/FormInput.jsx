import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

import Collapsible from "../UI/Collapsible";

const FormInput = (props) => {

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredPrice, setEnteredPrice] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleHandler = (event) => {
    setEnteredTitle(event.target.value);
  }
  const priceHandler = (event) => {
    setEnteredPrice(event.target.value);
  }
  const dateHandler = (e) => {
    setEnteredDate(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const validData = {
      title : enteredTitle,
      price : enteredPrice,
      date : new Date(enteredDate)
    }
    
    props.onSave(validData);

    setEnteredTitle('');
    setEnteredPrice('');
    setEnteredDate('');
  }

  return (
    <Collapsible id="inputForm">
        <div className="container bg-light rounded-3">
          <div className="row justify-content-center">
            <div className="col-6">
              <form onSubmit={submitHandler}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Item Title
                  </label>
                  <input
                    value={enteredTitle}
                    id="title"
                    type="text"
                    className="form-control"
                    placeholder="Item Title"
                    onChange={titleHandler}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="price" className="form-label">
                    Item Price
                  </label>
                  <input
                    value={enteredPrice}
                    id="price"
                    type="number"
                    className="form-control"
                    placeholder="Item Prices"
                    onChange={priceHandler}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="date" className="form-label">
                    Date Item
                  </label>
                  <input
                    value={enteredDate}
                    id="date"
                    type="date"
                    className="form-control"
                    placeholder="Item Date"
                    onChange={dateHandler}
                  />
                </div>
                <div className="row mb-3">
                  <div className="col-2">
                    <button type="submit" className="btn btn-success me-auto">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
    </Collapsible>
  );
};

import "bootstrap/dist/js/bootstrap.js";
export default FormInput;
