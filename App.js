import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Login, Signup } from './screens';

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
				initialRouteName={'Home'}
			>
				<Stack.Screen name='Home' component={Home} />
				<Stack.Screen name='Login' component={Login} />
				<Stack.Screen name='Signup' component={Signup} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
