import React from 'react';
import { FlastList, Text } from 'react-native';
/**tapping into the redux store using  useSelector */
import { useSelector } from 'react-redux';

const ProductsOverViewScreen = (props) => {
	const products = useSelector((state) => state.products.availableProducts);
	return (
		<FlastList
			data={products}
			keyExtractor={(item) => item.id}
			/**renderItem renders different list properties */
			renderItem={(itemData) => <Text> {itemData.item.title}</Text>}
		/>
	);
};

export default ProductsOverViewScreen;
