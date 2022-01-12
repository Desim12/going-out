import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function feedComponent() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Feed tab.</Text>
      </View>
    );
  }
  
  const Stack = createNativeStackNavigator();
  
  function Feed() {
    return (
        <Stack.Navigator screenOptions={{header: () => null}}>
          <Stack.Screen name="Feed Tab" component={feedComponent} />
        </Stack.Navigator>
    );
  }
  
  export default Feed;