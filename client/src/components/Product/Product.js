import React from "react";

const Product = ({ productName, photoUrl, price, description, size, totalQty, handleProductDelete }) => (

	<div class='row'>
		<div class='col s2'>
			<div class='aImg'>
				<img src={photoUrl} className='pPhoto' alt={productName} />
			</div>
		</div>
		<div class='col s2'>
			<p class='adminProd'>{productName}</p>
			<p class='adminProd'>{price}</p>
			<p class='adminProd'>{size}</p>
		</div>
		<div class='col s6'>
			<p class='adminProd'>{description}</p>
		</div>
		<div class='col s2'>
			<p class='adminProd qty'>{totalQty}</p>
			<button onClick={() => handleProductDelete(_id)} className="btn btn-primary">DELETE</button>
		</div>
	</div>

);