import React from 'react';
import {
	View,
	Button,
	ScrollView,
	StyleSheet,
	Text,
	Image,
} from 'react-native';
//importing useSelector to select a single product
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
		<ScrollView>
			<Image style={styles.image} source={{uri: selectedProduct.imageUrl}}/>
	 			<View style={styles.actions}>
<Button title='Add to Cart' onPress={() => {}}/>
			</View>
			
			<Text style={styles.price}> ${selectedProduct.price.toFixed(2)}</Text>
			<Text style={styles.description}> {selectedProduct.description}</Text>
		</ScrollView>
	);
};

/**extracting the product title in the header via navigationOptions, getParam('productTitle') is passed from ProductsOverViewScreen */
ProductDetailScreen.navigationOptions = (navData) => {
	return {
		headerTitle: navData.navigation.getParam('productTitle'),
	};
};

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: 300
		
	},
	description: {
		/** marginHorizontal creates a even margin on the right and left side of the display. */
		marginHorizontal: 20,
		textAlign: 'center',
		fontSize: 14
	}
	,
	price:{
		fontSize: 20,
		color: '#888',
		textAlign: 'center',
		marginVertical: 20,
		fontFamily: 'open-sans-bold'
	},
	description: {
		fontSize: 14,
		textAlign: 'center',
		fontFamily: 'open-sans'
	},
	actions: {
		marginVertical: 10,
		alignItems: 'center',

	}
	
});

export default ProductDetailScreen;
