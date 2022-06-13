import React from 'react';
import {Transaction} from '../../../components';
import {TTransaction} from '../../../types/history.types';

interface IHistoryCardContentProps {
  historyData: TTransaction[];
}

export function HistoryCardContent({historyData}: IHistoryCardContentProps) {
  return (
    <>
      {historyData.map((value, index) => (
        <Transaction key={`${value}-${index}`} value={value} marginTop={16} />
      ))}
    </>
  );
}
