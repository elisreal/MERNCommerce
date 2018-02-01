import React from "react";
import Jumbotron from "../../components/Jumbotron";

const NoMatch = () => (
  <div class='container'>
    <div class='row'>
      <div class='col-12'>
        <Jumbotron>
          <h1 className="text-center">404 Page Not Found</h1>
          <h1 className="text-center">
            <span role="img" aria-label="Face With Rolling Eyes Emoji">
              🙄
            </span>
          </h1>
        </Jumbotron>
      </div>
    </div>
  </div>
);

export default NoMatch;
