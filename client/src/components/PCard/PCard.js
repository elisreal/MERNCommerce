import React from "react";
import PImage from "../PImage"

const PCard = props => (
  <div class="card">
          <PImage />
          <div class="card-body">
            <div class="row">
              <div class="col-6">
                  <p class="card-text text-left">Item Name Here</p>
                  <p class="card-text text-left">$99.00</p>
                </div>
                <div class="col-6">
                  <p class="card-text text-right">
                    <a href="product.html" class="link">Click to View</a>
                  </p>
                </div>
              </div>
          </div>
        </div>
);

export default PCard;
