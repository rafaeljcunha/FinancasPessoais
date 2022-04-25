import React from 'react';
import {CustomText} from '../../../components';
import {HistoryHeaderWrapper} from './styles';

export function HistoryHeader() {
  return (
    <HistoryHeaderWrapper>
      <CustomText fontSize={24} lineHeight={28} fontWeight="bold">
        Histórico de anotações
      </CustomText>
    </HistoryHeaderWrapper>
  );
}
