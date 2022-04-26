import {ImageProps, ViewProps} from 'react-native';
import styled from 'styled-components/native';

interface ITransactionWrapperProps extends ViewProps {
  marginBottom: number;
  marginTop: number;
}

export const TransactionWrapper = styled.View<ITransactionWrapperProps>`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${({marginBottom}) => marginBottom}px;
  margin-top: ${({marginTop}) => marginTop}px;
`;

export const TransactionInfo = styled.View<ViewProps>`
  flex-direction: row;
  align-items: center;
`;

export const TransactionPrice = styled.View<ViewProps>`
  align-items: flex-end;
`;

export const TransactionImage = styled.Image<ImageProps>`
  width: 60px;
  height: 60px;
  border-radius: 20px;
  margin-right: 8px;
`;
