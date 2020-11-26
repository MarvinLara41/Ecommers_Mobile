import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';

import ProductsOverViewScreen from '../screens/shop/ProductsOverViewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';

import Colors from '../constants/colors';

const ProductsNavigator = createStackNavigator(
	{
		/** the first component is the starting screen that will be displayed */
		ProductsOverView: ProductsOverViewScreen,
		/** ProductDetailScreen can be accessed in the ProductsOverViewScreen via routeName */
		ProductDetail: ProductDetailScreen,
	},
	{
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
			},
			headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
			headerTitleStyle: {
				fontFamily: 'open-sans-bold'
			},
			headerBackTitleStyle: {
				fontFamily: 'open-sans'
			}
		},
	}
);

export default createAppContainer(ProductsNavigator);
