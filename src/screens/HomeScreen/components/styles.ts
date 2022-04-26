import {ViewProps} from 'react-native';
import styled from 'styled-components/native';
import {StatusBarHeight} from '../../../utils/device-info';

export const BalanceWrapper = styled.View<ViewProps>`
  align-items: center;
  justify-content: center;
  margin-top: 48px;
`;

export const HeaderWrapper = styled.View<ViewProps>`
  padding-top: ${StatusBarHeight + 24}px;
  padding-horizontal: 16px;
`;

export const LastTransactionsWrapper = styled.View<ViewProps>`
  background-color: white;
  border-top-right-radius: 32px;
  border-top-left-radius: 32px;
  flex: 1;
  margin-top: 48px;
  padding-horizontal: 16px;
  padding-top: 24px;
`;

export const LastTransactionHeader = styled.View<ViewProps>`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

export const TransactionIconWrapper = styled.View<ViewProps>`
  border-width: 1px;
  border-color: white;
  border-radius: 18px;
`;

export const TransactionList = styled.ScrollView``;

export const HeaderContent = styled.View<ViewProps>`
  flex-direction: row;
  align-items: center;
`;

export const HeaderAvatarWrapper = styled.View<ViewProps>`
  background-color: white;
  height: 60px;
  width: 60px;
  border-radius: 40px;
`;

export const Avatar = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;

export const HeaderGreetingWrapper = styled.View`
  margin-left: 16px;
`;
