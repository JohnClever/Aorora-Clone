import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constant';
import Svg, { Path, Ellipse, Defs, Stop, LinearGradient, ClipPath, Rect, G, Circle } from 'react-native-svg';
import { Button } from '../component';
const Login = ({ navigation }) => {
	return (
		<View
			style={{
				width: SIZES.width,
				height: SIZES.height,
			}}
		>
			<View style={{ marginTop: SIZES.padding }}>
				<Svg viewBox='0 123 470 500' shape-rendering='geometricPrecision' text-rendering='geometricPrecision'>
					<Defs>
						<LinearGradient id='myGradient' x1='0' y1='0' x2='1' y2='1'>
							<Stop offset='0' stopColor='#EE66AA' stopOpacity='0.8' />
							<Stop offset='1' stopColor='#16A9C7' stopOpacity='0.7' />
						</LinearGradient>
					</Defs>
					<Path
						id='eROiwjxabJA2'
						style='mix-blend-mode:hue'
						d='M61.280911,0C200.076764,4.439799,264.955746,61.193061,266.800037,204.890247C268.575575,400.520989,499.442438,410.280634,499.442438,410.280634L499.442438,0.833565L61.280911,0Z'
						filter='url(#eROiwjxabJA2-filter)'
						fill='url(#myGradient)'
						fill-rule='evenodd'
						stroke='none'
						stroke-width='1.280000'
					/>
					<Ellipse
						id='eROiwjxabJA3'
						rx='35.343151'
						ry='36.010003'
						transform='matrix(1 0 0 1 420.38482899999997 80.36371199999999)'
						opacity='0.5'
						fill='rgb(210,219,237)'
						stroke='none'
						stroke-width='0'
					/>
					<Path
						id='eROiwjxabJA4'
						d='M422.714643,205.140320L422.714643,270.741873L482.731314,270.741873L422.714643,205.140320Z'
						opacity='0.5'
						fill='rgb(210,219,237)'
						stroke='none'
						stroke-width='1'
					/>
					<Path
						id='eROiwjxabJA5'
						d='M257.335371,126.701862L266.800037,182.717422L313.350931,184.051125L313.350931,128.035565L257.335371,126.701862Z'
						opacity='0.6'
						fill='rgb(210,219,237)'
						stroke='none'
						stroke-width='1'
					/>
					<Path
						id='eROiwjxabJA6'
						d='M257.335371,0.833565L285.343151,44.012226L285.343151,0L257.335371,0.833565Z'
						opacity='0.5'
						fill='rgb(210,219,237)'
						stroke='none'
						stroke-width='1'
					/>
				</Svg>
				<Text
					style={{
						position: 'absolute',
						top: '15%',
						left: 50,
						color: COLORS.primary,
						fontWeight: '700',
						...FONTS.h1,
					}}
				>
					Login
				</Text>
			</View>
			<View
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
					marginTop: -500,
				}}
			>
				<TextInput
					style={{
						width: '70%',
						borderRadius: SIZES.radius,
						padding: SIZES.base,
						height: 40,
						borderColor: COLORS.lightGray,
						borderWidth: 0.5,
						backgroundColor: COLORS.white,
					}}
					// value={textInputValue}
					placeholder='Email'
				/>
				<TextInput
					style={{
						marginTop: SIZES.padding,
						width: '70%',
						borderRadius: SIZES.radius,
						padding: SIZES.base,
						height: 40,
						backgroundColor: COLORS.white,
						borderColor: COLORS.lightGray,
						borderWidth: 0.5,
					}}
					secureTextEntry={true}
					// value={textInputValue}
					placeholder='Password'
				/>
				<Text
					style={{
						marginTop: SIZES.base * 2,
						marginLeft: SIZES.padding * 5,
						color: COLORS.secondary,
					}}
				>
					Forgot password?
				</Text>
				<View
					style={{
						flex: 2,
						flexDirection: 'row',
					}}
				>
					<TouchableOpacity
						style={{
							marginTop: 245,
							marginLeft: 50,
						}}
					>
						<Text
							style={{
								...FONTS.body3,
							}}
						>
							New here?
						</Text>
					</TouchableOpacity>

					<Button
						customLabel='SignUp    >'
						customButtonStyle={{
							width: 150,
							height: 40,
							marginLeft: 90,
							marginTop: 230,
						}}
						onPress={() => navigation.navigate('Signup')}
					/>
				</View>
			</View>
		</View>
	);
};

export default Login;
