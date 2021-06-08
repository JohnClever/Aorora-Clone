import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '../component';
import { FONTS, SIZES } from '../constant';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

const Home = ({ navigation }) => {
	let [fontsLoaded] = useFonts({
		Inter_900Black,
	});
	if (!fontsLoaded) {
		return <AppLoading />;
	}
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Text
				style={{
					...FONTS.h1,
					letterSpacing: 1.5,
					fontFamily: 'Inter_900Black',
				}}
			>
				Aurora
			</Text>
			<Button
				customLabel='Get Started'
				customButtonStyle={{
					width: '90%',
					marginTop: SIZES.base,
					justifyContent: 'center',
					alignItems: 'center',
					position: 'absolute',
					bottom: 0,
					marginBottom: SIZES.padding,
				}}
				customLabelStyle={{
					textAlign: 'center',
				}}
				onPress={() => navigation.navigate('Login')}
			/>
		</View>
	);
};

export default Home;
