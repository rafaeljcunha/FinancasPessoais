import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavigationTab from './Tab';

const Stack = createNativeStackNavigator();

export default function NavigationRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={NavigationTab}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen name="EditPost" component={EditPost} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
