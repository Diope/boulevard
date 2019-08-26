import React, { Component } from "react";
import SHOPPING_DATA from "./data.js";

import CollectionPreview from "../../Components/CollectionPreview/CollectionPreview";

class ShoppingPage extends Component {
	state = { collections: SHOPPING_DATA };
	render() {
		const { collections } = this.state;
		return (
			<div className="shop-page">
				{collections.map(({ id, ...collectionProps }) => (
					<CollectionPreview key={id} {...collectionProps} />
				))}
			</div>
		);
	}
}

export default ShoppingPage;
