import React, {useState} from 'react';
import {ScrollView, StatusBar, View} from 'react-native';
import {
  HistoryCard,
  HistoryCardContent,
  HistoryCardTitle,
  HistoryHeader,
} from '../components';
import HistoryTab from '../components/History/Tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {color} from '../assets/tokens/colors';
import {transactionData} from '../storage/transaction-data';

const data = [
  {
    title: 'Assinaturas',
    icon: <AntDesign name="play" size={32} color={color.blue[50]} />,
    category: 'subscriptons',
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

const tabData = [
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

export default function HistoryScreen() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [tabIndex, setTabIndex] = useState(2);

  function logic(value) {
    switch (tabData[tabIndex].value) {
      case 'credit-card':
        return value.category === 'credit-card';
      case 'others':
        return value.category !== 'credit-card';
      default:
        return value;
    }
  }

  const filterData = data.filter(logic);

  return (
    <React.Fragment>
      <StatusBar barStyle="dark-content" />
      <HistoryHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          backgroundColor: color.white[20],
          paddingHorizontal: 16,
        }}
        contentContainerStyle={{
          paddingBottom: 24,
        }}>
        <HistoryTab
          tabData={tabData}
          setTabIndex={(index: number) => setTabIndex(index)}
          tabIndex={tabIndex}
        />

        {filterData.map((value, index) => (
          <HistoryCard
            key={index}
            icon={value.icon}
            title={value.title}
            historyData={value.historyData}
            onPressItem={() =>
              setActiveIndex(prev => (prev !== index ? index : null))
            }
            pressedItem={activeIndex === index}
          />
        ))}
      </ScrollView>
    </React.Fragment>
  );
}
