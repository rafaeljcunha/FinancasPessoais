import React from 'react';
import {Text, View} from 'react-native';

export default function HomeBalance() {
  return (
    <View
      style={{alignItems: 'center', justifyContent: 'center', marginTop: 48}}>
      <Text
        style={{
          color: 'white',
          lineHeight: 24,
          fontSize: 18,
          marginBottom: 8,
        }}>
        Saldo devedor
      </Text>
      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
          lineHeight: 44,
          fontSize: 40,
        }}>
        R$180,00
      </Text>
    </View>
  );
}
