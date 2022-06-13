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
import {
  CustomText,
  CustomButton as ActionButton,
  Transaction,
} from '../../../components/';
import {useNavigation} from '@react-navigation/native';

export function HomeLastTransactions() {
  const navigation = useNavigation();
  function handleNavigateToRegisterDebt() {
    navigation.navigate('RegisterDebt');
  }
  return (
    <LastTransactionsWrapper>
      <LastTransactionHeader>
        <CustomText fontSize={18} fontWeight="bold" color="black">
          Últimos lançamentos
        </CustomText>
        <ActionButton
          bgColor={color.blue[40]}
          paddingHorizontal={8}
          paddingVertical={4}
          borderRadius={16}
          onPress={handleNavigateToRegisterDebt}>
          <CustomText marginRight={8} color="white" fontWeight="bold">
            Novo
          </CustomText>
          <TransactionIconWrapper>
            <AntDesign name="plus" color={'white'} size={18} />
          </TransactionIconWrapper>
        </ActionButton>
      </LastTransactionHeader>
      <TransactionList showsVerticalScrollIndicator={false}>
        {transactionData.map((value, index) => (
          <Transaction
            key={`${value}-${index}`}
            value={value}
            marginBottom={16}
          />
        ))}
      </TransactionList>
    </LastTransactionsWrapper>
  );
}
