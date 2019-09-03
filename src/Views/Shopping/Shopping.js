import React from "react";
import { connect } from 'react-redux'


import CollectionPreview from "../../Components/CollectionPreview/CollectionPreview";
import { createStructuredSelector } from "reselect";
import { selectShopCollections } from "../../Redux/shop/shop.selector";

const ShoppingPage = ({collections}) => {

	return (
		<div className="shop-page">
			{collections.map(({ id, ...collectionProps }) => (
				<CollectionPreview key={id} {...collectionProps} />
			))}
		</div>
	);
}

const mapStateToProps = createStructuredSelector({
	collections: selectShopCollections
})

export default connect(mapStateToProps)(ShoppingPage);
