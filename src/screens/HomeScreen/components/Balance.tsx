import React from 'react';
import {CustomText} from '../../../components';
import {BalanceWrapper} from './styles';

export function HomeBalance() {
  return (
    <BalanceWrapper>
      <CustomText marginBottom={8} fontSize={18} color="white">
        Saldo devedor
      </CustomText>
      <CustomText fontSize={40} lineHeight={48} color="white" fontWeight="bold">
        R$180,00
      </CustomText>
    </BalanceWrapper>
  );
}
