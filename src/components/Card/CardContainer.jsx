import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Card from "./Card";
import CardEmpty from "./CardEmpty";

const CardContainer = (props) => {

  let cont = <CardEmpty/>;

  if (props.items.length > 0) {
    cont = props.items.map(item => {
      return (
      <Card key={item.title} title={item.title} price={item.price} date={item.date}/>);
    })
  }

  return(
    <div className="p-5 bg-light rounded-2 row mt-5 justify-content center">
      <div className="col">
        {cont}
      </div>
    </div>
  );
}

import 'bootstrap/dist/js/bootstrap.js';
export default CardContainer;