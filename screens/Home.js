import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from '../component';
import { FONTS, SIZES, image } from '../constant';
import AppLoading from 'expo-app-loading';
import { useFonts, Righteous_400Regular } from '@expo-google-fonts/righteous';

const Home = ({ navigation }) => {
	let [fontsLoaded] = useFonts({
		Righteous_400Regular,
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
			<Image
				source={image.girl}
				resizeMode='cover'
				style={{
					marginTop: -SIZES.padding * 5,
					width: 400,
					height: 400,
				}}
			/>
			<Text
				style={{
					...FONTS.h1,
					letterSpacing: 1.5,
					fontFamily: 'Righteous_400Regular',
					marginTop: SIZES.padding * 2,
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
					marginBottom: SIZES.padding * 3.5,
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
