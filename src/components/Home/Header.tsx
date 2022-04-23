import React from 'react';
import {View, Text, Image} from 'react-native';
import {StatusBarHeight} from '../../utils/device-info';

// const DEVICE_SCREEN_HEIGHT = Dimensions.get("screen").height
export default function HomeHeader() {
  return (
    <View
      style={{
        paddingTop: StatusBarHeight + 24,
        paddingHorizontal: 16,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            backgroundColor: 'white',
            height: 60,
            width: 60,
            borderRadius: 40,
          }}>
          <Image
            source={require('../../assets/images/avatar.jpeg')}
            style={{width: 60, height: 60, borderRadius: 30}}
          />
        </View>
        <View style={{marginLeft: 16}}>
          <Text
            style={{
              color: 'white',
              lineHeight: 24,
              fontSize: 18,
            }}>
            Olá
          </Text>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              lineHeight: 24,
              fontSize: 18,
            }}>
            Rafael
          </Text>
        </View>
      </View>
    </View>
  );
}
