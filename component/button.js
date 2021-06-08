import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SIZES } from '../constant';
const Button = ({ customLabel, customButtonStyle, customLabelStyle, onPress }) => {
	return (
		<TouchableOpacity
			style={{
				alignItems: 'center',
				justifyContent: 'center',
				...customButtonStyle,
			}}
			onPress={onPress}
		>
			<LinearGradient
				colors={['#EE66AA', '#16A9C7']}
				style={{
					width: '80%',
					height: 50,
					borderRadius: SIZES.radius,
					justifyContent: 'center',
					alignItems: 'center',
				}}
				start={{ x: 0, y: 1 }}
				end={{ x: 1, y: 0 }}
			>
				<Text style={{ color: '#ffffff', ...customLabelStyle }}>{customLabel}</Text>
			</LinearGradient>
		</TouchableOpacity>
	);
};

export default Button;
