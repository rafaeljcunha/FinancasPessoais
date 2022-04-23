import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HistoryScreen from '../screens/History';
import HomeScreen from '../screens/Home';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {color} from '../assets/tokens/colors';

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: color.blue[30],
        tabBarInactiveTintColor: color.gray[70],
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIconStyle: {
          ...ifIphoneX({marginTop: 8}, {marginTop: 0}),
        },
        tabBarStyle: {
          alignItems: 'center',
          justifyContent: 'center',
          ...ifIphoneX({height: 90}, {height: 60}),
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color: iconColor}: {color: string}) => (
            <AntDesign name="home" color={iconColor} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({color: iconColor}: {color: string}) => (
            <MaterialIcons name="history" color={iconColor} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
