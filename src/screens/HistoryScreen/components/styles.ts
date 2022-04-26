import {ViewProps} from 'react-native';
import styled from 'styled-components/native';
import {color} from '../../../assets/tokens/colors';
import {StatusBarHeight} from '../../../utils/device-info';

interface IHistoryTabItemProps {
  width: number;
  tabIndex: number;
  index: number;
}

export const HistoryHeaderWrapper = styled.View`
  padding-top: ${StatusBarHeight + 16}px;
  padding-bottom: 16px;
  align-items: center;
  background-color: ${color.white[20]};
`;

export const HistoryTabWrapper = styled.View`
  background-color: ${color.white[20]};
`;

export const HistoryTabContentItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
  margin-bottom: 24px;
  padding: 4px;
  border-radius: 24px;
  background-color: ${color.blue[40]};
  margin-horizontal: 16px;
`;

export const HistoryTabItem = styled.TouchableOpacity<IHistoryTabItemProps>`
  flex: 1;
  width: ${({width}) => width}px;
  background-color: ${({tabIndex, index}) =>
    tabIndex === index ? 'white' : color.blue[40]};
  border-radius: 24px;
  padding-horizontal: 16px;
  padding-vertical: 8px;
`;

export const HistoryCardTitleWrapper = styled.TouchableOpacity`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const HistoryCardTitleInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HistoryCardWrapper = styled.View<ViewProps>`
  margin-top: 16px;
  background-color: white;
  border-radius: 16px;
  padding-horizontal: 16px;
  padding-vertical: 12px;
  shadow-color: #000;
  shadow-offset: 0px 1px;
  shadow-opacity: 0.2;
  shadow-radius: 1.41px;
  elevation: 2;
`;
