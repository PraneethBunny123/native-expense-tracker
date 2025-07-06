import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons'

import AllExpenses from './screens/AllExpenses'
import RecentExpenses from './screens/RecentExpenses'
import ManageExpenses from './screens/ManageExpenses'

import {GlobalStyles} from './constants/styles'
import IconButton from './components/UI/IconButton';

const Stack = createNativeStackNavigator()
const BottomTabs = createBottomTabNavigator()

function BottomTabsNavigator() {
	return (
		<BottomTabs.Navigator
			screenOptions={({navigation}) => ({
				headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
				headerTintColor: 'white',
				tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
				tabBarActiveTintColor: GlobalStyles.colors.accent500,
				headerRight: ({tintColor}) => (
					<IconButton 
						icon='add' 
						color={tintColor} 
						size={24}
						onPress={() => {navigation.navigate('manage-expenses')}} 
					/>
				)
			})}
		>
			<BottomTabs.Screen 
				name='recent-expenses' 
				component={RecentExpenses} 
				options={{
					title:'Recent Expenses',
					tabBarLabel: 'Recent',
					tabBarIcon: ({color, size}) => <Ionicons name='hourglass' color={color} size={size} />
				}}
			/>
			<BottomTabs.Screen 
				name='all-expenses' 
				component={AllExpenses}
				options={{
					title:'All Expenses',
					tabBarLabel: 'All Expenses',
					tabBarIcon: ({color, size}) => <Ionicons name='calendar' color={color} size={size} />
				}}
			/>
		</BottomTabs.Navigator>
	)
}

export default function App() {
  return (
	<>
		<StatusBar style="auto"  />
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

