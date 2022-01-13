import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Rewards from './Tabs/Rewards';
import Feed from './Tabs/Feed'; 
import Map from './Tabs/Map';
import Discover from './Tabs/Discover';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Screens/LoginScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const tabs = () => {
  return(  
  <Tab.Navigator
    screenOptions={{header: () => null}}>
      <Tab.Screen
        name="Feed"
        component={Feed}/>
      <Tab.Screen
        name="Discover"
        component={Discover}/>
      <Tab.Screen
        name="Map"
        component={Map}/>
        <Tab.Screen
          name="Rewards"
          component={Rewards}/>
    </Tab.Navigator>)
}
export default function App() {
  return (
<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen options={{headerShown: false }} name="Login" component={LoginScreen} />
    <Stack.Screen name="Main" component={tabs} />
  </Stack.Navigator>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
