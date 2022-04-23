import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function HistoryCardTitle({
  title,
  icon,
  onPressItem,
  pressedItem,
}) {
  return (
    <TouchableOpacity
      onPress={onPressItem}
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {icon}
        <Text
          style={{
            marginLeft: 16,
            fontSize: 18,
            lineHeight: 24,
            fontWeight: pressedItem ? 'bold' : 'normal',
          }}>
          {title}
        </Text>
      </View>
      <AntDesign name={pressedItem ? 'up' : 'down'} size={18} />
    </TouchableOpacity>
  );
}
