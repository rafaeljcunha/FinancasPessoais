import React from 'react';
import {color} from '../../../assets/tokens/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {transactionData} from '../../../storage/transaction-data';
import {
  TransactionIconWrapper,
  LastTransactionHeader,
  LastTransactionsWrapper,
  TransactionList,
} from './styles';
import {CustomText, Button, Transaction} from '../../../components/';

export function HomeLastTransactions() {
  return (
    <LastTransactionsWrapper>
      <LastTransactionHeader>
        <CustomText fontSize={18} fontWeight="bold" color="black">
          Últimos lançamentos
        </CustomText>
        <Button
          bgColor={color.blue[40]}
          paddingHorizontal={8}
          paddingVertical={4}
          borderRadius={16}>
          <CustomText marginRight={8} color="white" fontWeight="bold">
            Novo
          </CustomText>
          <TransactionIconWrapper>
            <AntDesign name="plus" color={'white'} size={18} />
          </TransactionIconWrapper>
        </Button>
      </LastTransactionHeader>
      <TransactionList showsVerticalScrollIndicator={false}>
        {transactionData.map((value, index) => (
          <Transaction
            key={`${value}-${index}`}
            value={value}
            index={index}
            marginBottom={16}
          />
        ))}
      </TransactionList>
    </LastTransactionsWrapper>
  );
}
