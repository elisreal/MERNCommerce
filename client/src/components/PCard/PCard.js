import React from "react";
import PImage from "../PImage";
import { ListItem } from "../List";

const PCard = ({ id, productName, photoUrl, price, description, size, totalQty}) => (
<ListItem>
  <div className="col-6">
    <div className="card">
      <PImage />
      <div className="card-body">
        <div className="row">
          <div className="col-6">
            <p className="card-text text-left">{ productName }</p>
            <p className="card-text text-left">{ price }</p>
          </div>
          <div className="col-6">
            <p className="card-text text-right">
              <a href="/product/:{id}" class="link">Click to View</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</ListItem>
);

export default PCard;
