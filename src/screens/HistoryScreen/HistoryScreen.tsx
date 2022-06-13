import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {HistoryCard, HistoryHeader, HistoryTab} from './components';
import {contentContainerStyle, HistoryList} from './styles';
import {ECategory, TData} from '../../types/history.types';
import {historyData, tabData} from '../../mock/history';

export default function HistoryScreen() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [tabIndex, setTabIndex] = useState(0);

  function tabContentFilter(value: TData) {
    switch (tabData[tabIndex].value) {
      case ECategory.CREDITCARD:
        return value.category === ECategory.CREDITCARD;
      case ECategory.OTHERS:
        return value.category !== ECategory.CREDITCARD;
      default:
        return value;
    }
  }

  const filterData = historyData.filter(tabContentFilter);

  return (
    <React.Fragment>
      <StatusBar barStyle="dark-content" />
      <HistoryHeader />
      <HistoryTab
        tabData={tabData}
        setTabIndex={(index: number) => setTabIndex(index)}
        tabIndex={tabIndex}
      />
      <HistoryList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={contentContainerStyle}>
        {filterData.map((value, index) => (
          <HistoryCard
            key={`${value}-${index}`}
            icon={value.icon}
            title={value.title}
            historyData={value.historyData}
            onPressItem={() =>
              setActiveIndex(prev => (prev !== index ? index : null))
            }
            pressedItem={activeIndex === index}
          />
        ))}
      </HistoryList>
    </React.Fragment>
  );
}
