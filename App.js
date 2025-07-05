import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllExpenses from './screens/AllExpenses'
import RecentExpenses from './screens/RecentExpenses'
import ManageExpenses from './screens/ManageExpenses'

const Stack = createNativeStackNavigator()
const BottomTabs = createBottomTabNavigator()

function BottomTabsNavigator() {
	return (
		<BottomTabs.Navigator>
			<BottomTabs.Screen name='recent-expenses' component={RecentExpenses} />
			<BottomTabs.Screen name='manage-expenses' component={ManageExpenses} />
		</BottomTabs.Navigator>
	)
}

export default function App() {
  return (
	<>
		<StatusBar style="auto" />
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name='all-expenses' component={AllExpenses} options={{title: 'All Expenses'}} />
				<Stack.Screen name='bottom-tabs' component={BottomTabsNavigator} />
			</Stack.Navigator>
		</NavigationContainer>
	</>
  );
}

