import React from 'react';
import {Text, View} from 'react-native';
import {color} from '../../assets/tokens/colors';
import {StatusBarHeight} from '../../utils/device-info';

export default function HistoryHeader() {
  return (
    <View
      style={{
        paddingTop: StatusBarHeight + 16,
        paddingBottom: 16,
        alignItems: 'center',
        backgroundColor: color.white[20],
      }}>
      <Text style={{fontSize: 24, lineHeight: 28, fontWeight: 'bold'}}>
        Histórico de anotações
      </Text>
    </View>
  );
}
