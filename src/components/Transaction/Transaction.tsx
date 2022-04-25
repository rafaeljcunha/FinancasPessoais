import React from 'react';
import {View} from 'react-native';
import {CustomText} from '..';
import {color} from '../../assets/tokens/colors';
import {
  TransactionInfo,
  TransactionPrice,
  TransactionWrapper,
  TransactionImage,
} from './styles';

export function Transaction({value, index, marginTop = 0, marginBottom = 0}) {
  return (
    <TransactionWrapper marginTop={marginTop} marginBottom={marginBottom}>
      <TransactionInfo>
        <TransactionImage source={require('../../assets/images/netflix.png')} />
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
