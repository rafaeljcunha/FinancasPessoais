import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {CustomText} from '../../../components';
import {HistoryCardTitleInfo, HistoryCardTitleWrapper} from './styles';

export function HistoryCardTitle({title, icon, onPressItem, pressedItem}) {
  return (
    <HistoryCardTitleWrapper onPress={onPressItem}>
      <HistoryCardTitleInfo>
        {icon}
        <CustomText
          marginLeft={16}
          fontSize={16}
          fontWeight={pressedItem ? 'bold' : 'normal'}>
          {title}
        </CustomText>
      </HistoryCardTitleInfo>
      <AntDesign name={pressedItem ? 'up' : 'down'} size={18} />
    </HistoryCardTitleWrapper>
  );
}
