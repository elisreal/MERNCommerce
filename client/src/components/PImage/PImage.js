import React from "react";
import { ListItem } from "../List";

const PImage = ({ photoUrl }) => (
	<ListItem>
  		<img source={photoUrl} className="card-img-top img-fluid" />
  	</ListItem>
);

export default PImage;
