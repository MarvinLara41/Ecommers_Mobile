import PRODUCTS from '../../data/data';

/**setting the states that will be used throughout the app */
const initialState = {
	availableProducts: PRODUCTS,
	userProducts: PRODUCTS.filter((prod) => prod.ownerId === 'u1'),
};

export default (state = initialState, action) => {
	return state;
};
