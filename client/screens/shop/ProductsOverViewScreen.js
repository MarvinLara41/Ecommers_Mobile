import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import ProductItem from '../../components/shop/productItem';

const ProductsOverViewScreen = (props) => {
	const products = useSelector((state) => state.products.availableProducts);

	/**I am able to access ProductDetailScreen here because it was set in the Navigation component, props.navigation.navigate( 'ProductDetail') allows to me to do,  */
	/** in the second argument of props.navigation.navigate data can be passed, productId is the key and value can be form of data */
	return (
		<FlatList
			data={products}
			keyExtractor={(item) => item.id}
			renderItem={(itemData) => (
				<ProductItem
					image={itemData.item.imageUrl}
					title={itemData.item.title}
					price={itemData.item.price}
					onViewDetails={() => {
						props.navigation.navigate('ProductDetail', {
							productId: itemData.item.id,
							productTitle: itemData.item.title,
						});
					}}
					onAddToCart={() => {}}
				/>
			)}
		/>
	);
};

ProductsOverViewScreen.navigationOptions = {
	headerTitle: 'All Products',
};

export default ProductsOverViewScreen;
