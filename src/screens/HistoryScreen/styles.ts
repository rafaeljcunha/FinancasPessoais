import styled from 'styled-components/native';
import {color} from '../../assets/tokens/colors';

export const contentContainerStyle = {
  paddingBottom: 24,
};

export const HistoryList = styled.ScrollView`
  flex: 1;
  background-color: ${color.white[20]};
  padding-horizontal: 16px;
`;
