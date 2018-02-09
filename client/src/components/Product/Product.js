import React from "react";
import { ListItem } from "../List";
// import { Image } from "../Image";

const Product = ({ id, productName, photoUrl, price, description, size, totalQty, handleProductDelete }) => (
<ListItem>
	<div className='row aProduct'>
		<div className='col-2'>
			<div className='aImg'>
				<img source={photoUrl} className='pPhoto' alt={productName} />
			</div>
		</div>
		<div className='col-2'>
			<p className='adminProd'>{productName}</p>
			<p className='adminProd'>PRICE: {price}</p>
			<p className='adminProd'>SIZE: {size}</p>
		</div>
		<div className='col-6'>
			<p className='adminProd'>{description}</p>
		</div>
		<div className='col-2'>
			<p className='adminProd qty'>QTY: {totalQty}</p>
			<button onClick={() => handleProductDelete(id)} className="btn btn-primary">DELETE</button>
		</div>
	</div>
</ListItem>

);

export default Product;