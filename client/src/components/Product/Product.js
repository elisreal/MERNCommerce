import React from "react";
import { ListItem } from "../List";


const Product = ({ _id, productName, photoUrl, price, description, size, totalQty, handleProductDelete }) => (
<ListItem>
	<div className='row'>
		<div className='col s2'>
			<div className='aImg'>
				<img src={photoUrl} className='pPhoto' alt={productName} />
			</div>
		</div>
		<div className='col s2'>
			<p className='adminProd'>{productName}</p>
			<p className='adminProd'>{price}</p>
			<p className='adminProd'>{size}</p>
		</div>
		<div className='col s6'>
			<p className='adminProd'>{description}</p>
		</div>
		<div className='col s2'>
			<p className='adminProd qty'>{totalQty}</p>
			<button onClick={() => handleProductDelete(_id)} className="btn btn-primary">DELETE</button>
		</div>
	</div>
</ListItem>

);

export default Product;