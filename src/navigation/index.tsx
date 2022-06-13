import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavigationTab from './TabNavigator';
import RegisterDebt from '../screens/RegisterDebt/RegisterDebt';
import NavigateHeader from '../components/NavigateHeader/NavigateHeader';

const Stack = createNativeStackNavigator();

export default function NavigationRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Init">
        <Stack.Screen
          name="Init"
          component={NavigationTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterDebt"
          component={RegisterDebt}
          options={{
            headerShown: true,
            headerTitle: 'Nova dívida',
            headerBackTitleVisible: false,
            animation: 'none',
            header: props => <NavigateHeader {...props} />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
