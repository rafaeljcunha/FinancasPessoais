import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {color} from '../../assets/tokens/colors';
import {DEVICE_SCREEN_WIDTH} from '../../utils/device-info';

const width = DEVICE_SCREEN_WIDTH / 3;

export default function HistoryTab({tabData, setTabIndex, tabIndex}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
        marginBottom: 24,
        padding: 4,
        borderRadius: 24,
        backgroundColor: color.blue[40],
      }}>
      {tabData.map((value, index) => (
        <TouchableOpacity
          onPress={() => setTabIndex(index)}
          style={{
            flex: 1,
            width,
            paddingHorizontal: 16,
            paddingVertical: 8,
            backgroundColor: tabIndex === index ? 'white' : color.blue[40],
            borderRadius: 24,
          }}>
          <Text
            style={{
              color: tabIndex === index ? color.blue[40] : 'white',
              fontSize: 14,
              fontWeight: tabIndex === index ? 'bold' : 'normal',
              lineHeight: 24,
              textAlign: 'center',
            }}>
            {value.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
