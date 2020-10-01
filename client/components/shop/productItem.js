import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

import Colors from '../../constants/colors';

const ProductItem = (props) => {
	/**passing props to this component allows access to data */
	/** imageContainer is needed to prevent the overflow of the image, this allows to have rounded corners on the image */
	return (
		<View style={styles.product}>
			<View style={styles.imageContainer}>
				<Image style={styles.image} source={{ uri: props.image }} />
				<View style={styles.details}>
					<Text style={styles.title}>Title:{props.title} </Text>
					<Text style={styles.price}>Price:${props.price}</Text>
				</View>
				<View style={styles.actions}>
					<Button
						color={Colors.primary}
						title="Details"
						onPress={props.onViewDetails}
					/>
					<Button
						color={Colors.primary}
						title="Cart"
						onPress={props.onAddToCart}
					/>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	product: {
		/**Shadow only works on IOS */
		shadowColor: 'black',
		shadowOpacity: 0.26,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
		/**elevation is for andriod */
		elevation: 5,
		borderRadius: 10,
		backgroundColor: 'white',
		height: 300,
		margin: 20,
	},
	image: {
		width: '100%',
		height: '60%',
	},
	title: {
		fontSize: 18,
		marginVertical: 4,
	},
	price: {
		fontSize: 14,
		color: '#888',
	},
	actions: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: '25%',
		paddingHorizontal: 40,
	},
	details: {
		alignItems: 'center',
		height: '15%',
		padding: 10,
	},

	imageContainer: {
		width: '100%',
		height: '60%',
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		overflow: 'hidden',
	},
});

export default ProductItem;
