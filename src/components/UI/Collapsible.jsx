import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

const Collapsible = (props) => {
  return (
    <div>
      <button className="btn btn-primary mb-3" data-bs-toggle="collapse" data-bs-target={`#${props.id}`} >Content</button>
      <div className="collapse" id={`${props.id}`}>
        {props.children}
      </div>
    </div>
  );
}

import 'bootstrap/dist/js/bootstrap.js';
export default Collapsible;