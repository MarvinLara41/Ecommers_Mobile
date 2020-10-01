import React from 'react';
import {
	View,
	Button,
	ScrollView,
	StyleSheet,
	Text,
	Image,
} from 'react-native';
import { useSelector } from 'react-redux';

const ProductDetailScreen = (props) => {
	/** productId is extracted from ProductsOverViewScreen, it was passed via the productId prop on the onViewDetails button, accessing props.navigation.getParam('productId') allows for the flow of data into this component */
	const productId = props.navigation.getParam('productId');

	/** using useSelector to access the global state via redux, I am silicing into the productsReducer and extracting the availableProducts which point the products in the database, .find(prod => prod.id === productId) will only return the product that I have selected from the route parameters*/
	const selectedProduct = useSelector((state) =>
		state.products.availableProducts.find((prod) => prod.id === productId)
	);

	/** */
	return (
		<View>
			<Text> {selectedProduct.title} </Text>
		</View>
	);
};

/**extracting the product title in the header via navigationOptions, getParam('productTitle') is passed from ProductsOverViewScreen */
ProductDetailScreen.navigationOptions = (navData) => {
	return {
		headerTitle: navData.navigation.getParam('productTitle'),
	};
};

const styles = StyleSheet.create({});

export default ProductDetailScreen;
