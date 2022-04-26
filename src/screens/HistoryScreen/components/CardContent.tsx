import React from 'react';
import {Transaction} from '../../../components';

export function HistoryCardContent({historyData}) {
  return historyData.map((value, index) => (
    <Transaction
      key={`${value}-${index}`}
      index={index}
      value={value}
      marginTop={16}
    />
  ));
}
