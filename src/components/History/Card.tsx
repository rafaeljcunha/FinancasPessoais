import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {HistoryCardContent, HistoryCardTitle} from '..';
import {color} from '../../assets/tokens/colors';

export default function HistoryCard({
  title,
  pressedItem,
  onPressItem,
  icon,
  historyData,
}) {
  return (
    <View
      style={{
        marginTop: 16,
        backgroundColor: 'white',
        borderRadius: 16,
        paddingHorizontal: 16,
        paddingVertical: 12,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
      }}>
      <HistoryCardTitle
        onPressItem={onPressItem}
        pressedItem={pressedItem}
        title={title}
        icon={icon}
      />
      {pressedItem && (
        <>
          <View
            style={{
              backgroundColor: color.gray[0],
              marginTop: 16,
              height: 1,
            }}
          />
          <HistoryCardContent historyData={historyData} />
        </>
      )}
    </View>
  );
}
