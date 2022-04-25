import React from 'react';
import {color} from '../../../assets/tokens/colors';
import {CustomText} from '../../../components';
import {DEVICE_SCREEN_WIDTH} from '../../../utils/device-info';
import {
  HistoryTabContentItem,
  HistoryTabItem,
  HistoryTabWrapper,
} from './styles';

const width = DEVICE_SCREEN_WIDTH / 3;

export function HistoryTab({tabData, setTabIndex, tabIndex}) {
  return (
    <HistoryTabWrapper>
      <HistoryTabContentItem>
        {tabData.map((value, index) => (
          <HistoryTabItem
            key={`${value}-${index}`}
            onPress={() => setTabIndex(index)}
            width={width}
            index={index}
            tabIndex={tabIndex}>
            <CustomText
              color={tabIndex === index ? color.blue[40] : 'white'}
              fontSize={14}
              fontWeight={tabIndex === index ? 'bold' : 'normal'}
              lineHeight={24}
              textAlign="center">
              {value.title}
            </CustomText>
          </HistoryTabItem>
        ))}
      </HistoryTabContentItem>
    </HistoryTabWrapper>
  );
}
