import React from 'react';
import {color} from '../../../assets/tokens/colors';
import {CustomText} from '../../../components';
import {TTabData} from '../../../types/history.types';
import {DEVICE_SCREEN_WIDTH} from '../../../utils/device-info';
import {
  HistoryTabContentItem,
  HistoryTabItem,
  HistoryTabWrapper,
} from './styles';

interface IHistoryTabProps {
  tabData: TTabData[];
  setTabIndex(index: number): void;
  tabIndex: number;
}

const DIVIDING_PROPORTION = 3;

const width = DEVICE_SCREEN_WIDTH / DIVIDING_PROPORTION;

export function HistoryTab({tabData, setTabIndex, tabIndex}: IHistoryTabProps) {
  return (
    <HistoryTabWrapper>
      <HistoryTabContentItem>
        {tabData.map((value: TTabData, index: number) => (
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
