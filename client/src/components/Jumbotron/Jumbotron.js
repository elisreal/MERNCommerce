import React from "react";
import "./Jumbotron.css";

const Jumbotron = ({ children }) =>
  <div class="jumbotron jumbotron-fluid">
		<div class="container text-center">
			<h1 class="display-4">MERNCommerce</h1>
			<p class="lead">A Server-side Ecommerce tool for Front-end developers</p>
		</div>
	</div>;

export default Jumbotron;
