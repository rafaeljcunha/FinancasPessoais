import React from 'react';
import {StatusBar, View} from 'react-native';
import {color} from '../assets/tokens/colors';
import {HomeBalance, HomeHeader, HomeLastTransactions} from '../components';

export default function HomeScreen() {
  return (
    <React.Fragment>
      <StatusBar barStyle="light-content" />
      <View style={{flex: 1, backgroundColor: color.blue[40]}}>
        <HomeHeader />
        <HomeBalance />
        <HomeLastTransactions />
      </View>
    </React.Fragment>
  );
}
