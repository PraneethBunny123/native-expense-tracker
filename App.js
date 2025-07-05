import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllExpenses from './screens/AllExpenses'
import RecentExpenses from './screens/RecentExpenses'
import ManageExpenses from './screens/ManageExpenses'
import {GlobalStyles} from './constants/styles'

const Stack = createNativeStackNavigator()
const BottomTabs = createBottomTabNavigator()

function BottomTabsNavigator() {
	return (
		<BottomTabs.Navigator
			screenOptions={{
				headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
				headerTintColor: 'white',
				tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
				tabBarActiveTintColor: GlobalStyles.colors.accent500
			}}
		>
			<BottomTabs.Screen 
				name='recent-expenses' 
				component={RecentExpenses} 
					
			/>
			<BottomTabs.Screen 
				name='all-expenses' 
				component={AllExpenses}
				
			/>
		</BottomTabs.Navigator>
	)
}

export default function App() {
  return (
	<>
		<StatusBar style="auto" />
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen 
					name='bottom-tabs' 
					component={BottomTabsNavigator} 
					options={{
						headerShown: false
					}}
				/>
				<Stack.Screen name='manage-expenses' component={ManageExpenses} />
			</Stack.Navigator>
		</NavigationContainer>
	</>
  );
}

