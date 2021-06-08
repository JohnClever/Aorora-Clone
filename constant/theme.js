import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

// COLORS

export const COLORS = {
	//base
	primary: '#EE66AA',
	secondary: '#16A9C7',

	// colors
	white: '#ffffff',
	lightGray: '#a7a5cd',
};

export const SIZES = {
	//global sizes
	base: 8,
	font: 14,
	radius: 12,
	padding: 24,

	//font sizes
	h1: 30,
	h2: 22,
	h3: 16,
	h4: 14,
	body1: 30,
	body2: 22,
	body3: 16,
	body4: 14,
	body5: 12,

	//app dimensions
	width,
	height,
};

export const FONTS = {
	h1: { fontSize: SIZES.h1, lineHeight: 36 },
	h2: { fontSize: SIZES.h2, lineHeight: 30 },
	h3: { fontSize: SIZES.h3, lineHeight: 22 },
	h4: { fontSize: SIZES.h4, lineHeight: 22 },
	body1: { fontSize: SIZES.body1, lineHeight: 36 },
	body2: { fontSize: SIZES.body2, lineHeight: 30 },
	body3: { fontSize: SIZES.body3, lineHeight: 22 },
	body4: { fontSize: SIZES.body4, lineHeight: 22 },
	body5: { fontSize: SIZES.body5, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
