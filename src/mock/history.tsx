import React from 'react';
import {transactionData} from '../storage/transaction-data';
import {TData, TTabData} from '../types/history.types';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {color} from '../assets/tokens/colors';

export const historyData: TData[] = [
  {
    title: 'Assinaturas',
    icon: <AntDesign name="play" size={32} color={color.blue[50]} />,
    category: 'subscriptions',
    historyData: transactionData,
  },
  {
    title: 'Carro',
    icon: <FontAwesome name="car" size={32} color={color.blue[40]} />,
    category: 'vehicles',
    historyData: transactionData,
  },
  {
    title: 'Financiamento',
    icon: <FontAwesome name="home" size={32} color={color.blue[60]} />,
    category: 'financing',
    historyData: transactionData,
  },
  {
    title: 'Samsung Card',
    icon: <FontAwesome name="credit-card" size={32} color="black" />,
    category: 'credit-card',
    historyData: transactionData,
  },
  {
    title: 'CrediCard',
    icon: <FontAwesome name="credit-card" size={32} color="black" />,
    category: 'credit-card',
    historyData: transactionData,
  },
  {
    title: 'Picpay',
    icon: <FontAwesome name="credit-card" size={32} color="black" />,
    category: 'credit-card',
    historyData: transactionData,
  },
];

export const tabData: TTabData[] = [
  {
    title: 'Crédito',
    value: 'credit-card',
  },
  {
    title: 'Outros',
    value: 'others',
  },
  {
    title: 'Todos',
    value: 'All',
  },
];
