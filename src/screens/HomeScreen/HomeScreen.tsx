import React from 'react';
import {StatusBar} from 'react-native';
import {HomeBalance, HomeHeader, HomeLastTransactions} from './components';
import {WrapperHome} from './styles';

export default function HomeScreen() {
  return (
    <React.Fragment>
      <StatusBar barStyle="light-content" />
      <WrapperHome>
        <HomeHeader />
        <HomeBalance />
        <HomeLastTransactions />
      </WrapperHome>
    </React.Fragment>
  );
}
