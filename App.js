import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Rewards from './Rewards';
import Feed from './Feed';
import Map from './Map';
import Discover from './Discover';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
<NavigationContainer>
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
      </Tab.Navigator>
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
