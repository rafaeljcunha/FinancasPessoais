import React from 'react';
import {Image, Text, View} from 'react-native';
import {color} from '../../assets/tokens/colors';

export default function HistoryCardContent({historyData}) {
  return historyData.map((value, index) => (
    <View
      style={{
        marginTop: 16,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/images/netflix.png')}
          style={{
            width: 50,
            height: 50,
            marginRight: 8,
          }}
        />
        <View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              lineHeight: 24,
            }}>
            {value.title}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: color.gray[100],
              lineHeight: 24,
            }}>
            {value.date}
          </Text>
        </View>
      </View>
      <View style={{alignItems: 'flex-end'}}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            lineHeight: 24,
            color: 'red',
          }}>
          - R$ {value.price}
        </Text>
        <Text style={{fontSize: 14, color: color.gray[100], lineHeight: 24}}>
          {value.type}
        </Text>
      </View>
    </View>
  ));
}
