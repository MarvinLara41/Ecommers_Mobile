import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';

import ProductsOverViewScreen from '../screens/shop/ProductsOverViewScreen';

import Colors from '../constants/colors';

const ProductsNavigator = createStackNavigator(
	{
		ProductsOverView: ProductsOverViewScreen,
	},
	{
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: Platform.OS === 'andriod' ? Colors.primary : '',
				headerTintColor: Platform.OS === 'andriod' ? 'white' : Colors.primary,
			},
		},
	}
);

export default createAppContainer(ProductsNavigator);
