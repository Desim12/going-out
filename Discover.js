import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function discoverComponent() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Discover tab.</Text>
      </View>
    );
  }
  
  const Stack = createNativeStackNavigator();
  
  function Discover() {
    return (
        <Stack.Navigator screenOptions={{header: () => null}}>
          <Stack.Screen name="Rewards Tab" component={discoverComponent} />
        </Stack.Navigator>
    );
  }
  
  export default Discover;