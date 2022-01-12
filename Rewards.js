import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function rewardsComponent() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Rewards tab.</Text>
      </View>
    );
  }
  
  const Stack = createNativeStackNavigator();
  
  function Rewards() {
    return (
        <Stack.Navigator screenOptions={{header: () => null}}>
          <Stack.Screen name="Rewards Tab" component={rewardsComponent} />
        </Stack.Navigator>
    );
  }
  
  export default Rewards;