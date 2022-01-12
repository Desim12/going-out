import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function mapComponent() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Map tab.</Text>
      </View>
    );
  }
  
  const Stack = createNativeStackNavigator();
  
  function Map() {
    return (
        <Stack.Navigator screenOptions={{header: () => null}}>
          <Stack.Screen name="Map Tab" component={mapComponent} />
        </Stack.Navigator>
    );
  }
  
  export default Map;