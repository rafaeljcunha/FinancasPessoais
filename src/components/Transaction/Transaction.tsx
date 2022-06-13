import React from 'react';
import {View} from 'react-native';
import {CustomText} from '..';
import {color} from '../../assets/tokens/colors';
import {IMAGES} from '../../assets/tokens/images';
import {TTransaction} from '../../types/history.types';
import {
  TransactionInfo,
  TransactionPrice,
  TransactionWrapper,
  TransactionImage,
} from './styles';

interface ITransactionProps {
  value: TTransaction;
  marginTop?: number;
  marginBottom?: number;
}

export function Transaction({
  value,
  marginTop = 0,
  marginBottom = 0,
}: ITransactionProps) {
  return (
    <TransactionWrapper marginTop={marginTop} marginBottom={marginBottom}>
      <TransactionInfo>
        <TransactionImage source={IMAGES.netflix} />
        <View>
          <CustomText fontWeight="bold">{value.title}</CustomText>
          <CustomText fontSize={14} color={color.gray[100]}>
            {value.date}
          </CustomText>
        </View>
      </TransactionInfo>
      <TransactionPrice>
        <CustomText fontWeight="bold" color="red">
          - R$ {value.price}
        </CustomText>
        <CustomText fontSize={14} color={color.gray[100]}>
          {value.type}
        </CustomText>
      </TransactionPrice>
    </TransactionWrapper>
  );
}
